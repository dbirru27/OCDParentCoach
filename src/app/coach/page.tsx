"use client";

import { useState, useRef, useEffect, useCallback, type FormEvent, type KeyboardEvent } from "react";
import { MessageCircle, Mic, Send, Plus, Search, Menu, X, Loader2, Paperclip, FileSpreadsheet, FileText as FileTextIcon } from "lucide-react";
import { InfoTooltip } from "@/components/info-tooltip";
import { glossary } from "@/lib/glossary";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const quickPrompts = [
  { text: "My child won't stop checking things", tooltip: null },
  { text: "Bedtime is a nightmare", tooltip: null },
  {
    text: "How do I stop accommodating?",
    tooltip: { term: "Accommodation", definition: glossary.accommodation },
  },
  {
    text: "Explain ERP to me",
    tooltip: { term: "ERP", definition: glossary.ERP },
  },
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm your OCD Parent Coach. I'm here to help you navigate your child's OCD with evidence-based strategies. What's on your mind today?",
};

const placeholderHistory = [
  { group: "Today", items: ["Bedtime rituals discussion"] },
  {
    group: "Yesterday",
    items: ["School avoidance strategies", "Checking behaviors"],
  },
  { group: "Last Week", items: ["Hand washing concerns"] },
];

/* ------------------------------------------------------------------ */
/*  Simple markdown-ish renderer                                       */
/* ------------------------------------------------------------------ */

function renderMarkdown(text: string): string {
  let html = text
    // Escape HTML entities (but preserve our own tags below)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headings (### then ## then #)
    // Not wrapping in block tags to keep it simple — just bold + size
    // Bold: **text**
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic: *text* (but not inside bold)
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="rounded bg-cream-dark px-1 py-0.5 text-sm font-mono">$1</code>')
    // Links: [text](url)
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sage-dark underline underline-offset-2 hover:text-sage">$1</a>'
    )
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-3 border-cream-dark" />')
    // Unordered list items: lines starting with - or *
    .replace(/^[\-\*]\s+(.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    // Ordered list items: lines starting with 1. 2. etc.
    .replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
    // Line breaks: double newline → paragraph break, single newline → <br>
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");

  // Wrap in paragraph
  html = `<p>${html}</p>`;

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, "");

  return html;
}

/* ------------------------------------------------------------------ */
/*  File parsing                                                       */
/* ------------------------------------------------------------------ */

interface AttachedFile {
  name: string;
  type: string; // 'excel' | 'csv' | 'text' | 'pdf'
  content: string; // parsed text content
}

const SUPPORTED_EXTENSIONS = new Set(["xlsx", "xls", "csv", "txt", "pdf", "doc", "docx", "md"]);

async function parseFile(file: File): Promise<AttachedFile> {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";

  // Excel files
  if (ext === "xlsx" || ext === "xls") {
    const XLSX = await import("xlsx");
    const buffer = await file.arrayBuffer();
    const wb = XLSX.read(buffer, { type: "array" });
    const sheets: string[] = [];
    for (const name of wb.SheetNames) {
      const ws = wb.Sheets[name];
      const text = XLSX.utils.sheet_to_csv(ws);
      sheets.push(wb.SheetNames.length > 1 ? `--- Sheet: ${name} ---\n${text}` : text);
    }
    return { name: file.name, type: "excel", content: sheets.join("\n\n") };
  }

  // CSV / plain text / markdown
  if (ext === "csv" || ext === "txt" || ext === "md") {
    const text = await file.text();
    return { name: file.name, type: ext === "csv" ? "csv" : "text", content: text };
  }

  // For other files, read as text (best effort)
  try {
    const text = await file.text();
    return { name: file.name, type: "text", content: text };
  } catch {
    return { name: file.name, type: "text", content: `[Could not parse ${file.name}]` };
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [attachedFile, setAttachedFile] = useState<AttachedFile | null>(null);
  const [isParsingFile, setIsParsingFile] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll ---------------------------------------------------- */
  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  /* Auto-resize textarea ------------------------------------------- */
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
  }, [input]);

  /* Send message --------------------------------------------------- */
  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if ((!trimmed && !attachedFile) || isStreaming) return;
      const messageText = trimmed || "Please review this file and share your thoughts.";

      // Build display message (what the user sees)
      let displayContent = messageText;
      if (attachedFile) {
        displayContent = `📎 ${attachedFile.name}\n\n${messageText}`;
      }

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: displayContent,
      };

      // Build API message with file content injected
      let apiContent = messageText;
      if (attachedFile) {
        apiContent = `[The user has uploaded a file: "${attachedFile.name}"]\n\nFile contents:\n\`\`\`\n${attachedFile.content}\n\`\`\`\n\nUser message: ${messageText}`;
      }

      const apiUserMsg = { role: "user" as const, content: apiContent };

      // Build the conversation for the API (exclude the static welcome message)
      const conversationForApi = [
        ...messages.filter((m) => m.id !== "welcome").map((m) => ({ role: m.role, content: m.content })),
        apiUserMsg,
      ];

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setAttachedFile(null);
      setIsStreaming(true);

      // Create a placeholder assistant message
      const assistantId = crypto.randomUUID();
      const assistantMsg: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
      };
      setMessages((prev) => [...prev, assistantMsg]);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: conversationForApi }),
          signal: controller.signal,
        });

        if (!response.ok) {
          let errorMsg = `HTTP ${response.status}`;
          try {
            const errData = await response.json();
            if (errData && typeof errData === "object" && "error" in errData) {
              errorMsg = (errData as { error: string }).error;
            }
          } catch {
            // response wasn't JSON
          }
          throw new Error(errorMsg);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          // Keep the last (potentially incomplete) line in the buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith("data: ")) continue;
            const payload = trimmedLine.slice(6);
            if (payload === "[DONE]") break;

            try {
              const parsed = JSON.parse(payload) as {
                text?: string;
                error?: string;
              };
              if (parsed.error) throw new Error(parsed.error);
              if (parsed.text) {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? { ...m, content: m.content + parsed.text }
                      : m
                  )
                );
              }
            } catch {
              // Skip unparseable chunks
            }
          }
        }
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          // User cancelled — leave partial message
        } else {
          const errorText =
            err instanceof Error ? err.message : "Something went wrong";
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    content:
                      m.content ||
                      `I'm sorry, I wasn't able to respond right now. (${errorText}) Please try again.`,
                  }
                : m
            )
          );
        }
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [isStreaming, messages, attachedFile]
  );

  /* Handlers ------------------------------------------------------- */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleQuickPrompt = (text: string) => {
    sendMessage(text);
  };

  const handleNewChat = () => {
    if (abortRef.current) abortRef.current.abort();
    setMessages([WELCOME_MESSAGE]);
    setInput("");
    setAttachedFile(null);
    setIsStreaming(false);
    setSidebarOpen(false);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Reset input so the same file can be re-selected
    e.target.value = "";

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!SUPPORTED_EXTENSIONS.has(ext)) {
      alert(`Unsupported file type (.${ext}). Supported: Excel, CSV, PDF, TXT, MD, DOCX.`);
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert("File too large. Please upload files under 5MB.");
      return;
    }

    setIsParsingFile(true);
    try {
      const parsed = await parseFile(file);
      // Truncate very large content
      if (parsed.content.length > 30000) {
        parsed.content = parsed.content.slice(0, 30000) + "\n\n[Content truncated — file was too large to include in full]";
      }
      setAttachedFile(parsed);
    } catch {
      alert("Could not read this file. Please try a different format.");
    } finally {
      setIsParsingFile(false);
    }
  };

  /* Derived state -------------------------------------------------- */
  const showQuickPrompts = messages.length === 1 && messages[0].id === "welcome";

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */
  return (
    <div className="flex h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)]">
      {/* ---- Mobile sidebar overlay ---- */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-charcoal/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ---- Sidebar ---- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-cream-dark bg-white transition-transform duration-200
          md:relative md:z-auto md:flex md:translate-x-0
          ${sidebarOpen ? "flex translate-x-0" : "hidden -translate-x-full"}
        `}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <span className="text-sm font-medium text-charcoal">
            Chat History
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1 text-charcoal/50 hover:bg-cream"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 md:pt-4">
          <button
            onClick={handleNewChat}
            className="flex w-full items-center gap-2 rounded-xl bg-sage px-4 py-2.5 text-sm font-medium text-white hover:bg-sage-dark transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Chat
          </button>
        </div>

        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-lg border border-cream-dark bg-cream px-3 py-2">
            <Search className="h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              placeholder="Search chats..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-charcoal/40"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          {placeholderHistory.map((section) => (
            <div key={section.group}>
              <p className="px-3 py-2 text-xs font-medium text-charcoal/40 uppercase">
                {section.group}
              </p>
              {section.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg px-3 py-2 text-sm text-charcoal/50 hover:bg-cream transition-colors cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* ---- Main chat area ---- */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile header with menu button */}
        <div className="flex items-center gap-2 border-b border-cream-dark bg-white px-4 py-2 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-1.5 text-charcoal/60 hover:bg-cream"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium text-charcoal">
            AI Parent Coach
          </span>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-2xl space-y-6">
            {messages.map((msg) => (
              <div key={msg.id}>
                {msg.role === "assistant" ? (
                  /* ---- Assistant bubble ---- */
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/10">
                      <MessageCircle className="h-5 w-5 text-sage" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-white border border-cream-dark p-4 shadow-sm max-w-[85%]">
                      {msg.content ? (
                        <div
                          className="text-charcoal/80 leading-relaxed prose-sm [&_strong]:text-charcoal [&_strong]:font-semibold [&_li]:my-0.5 [&_hr]:my-3 [&_hr]:border-cream-dark [&_a]:text-sage-dark [&_a]:underline [&_p]:my-1 first:[&_p]:mt-0 last:[&_p]:mb-0"
                          dangerouslySetInnerHTML={{
                            __html: renderMarkdown(msg.content),
                          }}
                        />
                      ) : (
                        /* Typing indicator */
                        <div className="flex items-center gap-1.5 py-1">
                          <span className="h-2 w-2 rounded-full bg-sage/40 animate-bounce [animation-delay:0ms]" />
                          <span className="h-2 w-2 rounded-full bg-sage/40 animate-bounce [animation-delay:150ms]" />
                          <span className="h-2 w-2 rounded-full bg-sage/40 animate-bounce [animation-delay:300ms]" />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* ---- User bubble ---- */
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-sm bg-sage px-4 py-3 text-white max-w-[85%]">
                      <p className="leading-relaxed text-sm">{msg.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick prompts (only shown on fresh chat) */}
            {showQuickPrompts && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickPrompts.map((prompt) => (
                  <span
                    key={prompt.text}
                    className="inline-flex items-center gap-1"
                  >
                    <button
                      onClick={() => handleQuickPrompt(prompt.text)}
                      className="rounded-full border border-sage/30 bg-sage/5 px-4 py-2 text-sm text-sage-dark hover:bg-sage/10 transition-colors"
                    >
                      {prompt.text}
                    </button>
                    {prompt.tooltip && (
                      <InfoTooltip
                        text={`${prompt.tooltip.term}: ${prompt.tooltip.definition}`}
                      />
                    )}
                  </span>
                ))}
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-cream-dark bg-white p-4">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit}>
              {/* Attached file indicator */}
              {attachedFile && (
                <div className="mb-2 flex items-center gap-2 rounded-xl bg-sage/10 border border-sage/20 px-3 py-2">
                  {attachedFile.type === "excel" ? (
                    <FileSpreadsheet className="h-4 w-4 text-sage-dark shrink-0" />
                  ) : (
                    <FileTextIcon className="h-4 w-4 text-sage-dark shrink-0" />
                  )}
                  <span className="text-xs text-sage-dark truncate flex-1">
                    {attachedFile.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAttachedFile(null)}
                    className="text-charcoal/40 hover:text-charcoal transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
              <div className="flex items-end gap-2 rounded-2xl border border-cream-dark bg-cream p-2">
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="*/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isStreaming || isParsingFile}
                  className="rounded-xl p-2 text-charcoal/40 hover:bg-white hover:text-charcoal transition-colors disabled:opacity-50"
                  aria-label="Attach file"
                  title="Upload Excel, CSV, or text file"
                >
                  {isParsingFile ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Paperclip className="h-5 w-5" />
                  )}
                </button>
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={attachedFile ? "Add a message about this file..." : "Type a message..."}
                  disabled={isStreaming}
                  className="flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-charcoal/40 disabled:opacity-50"
                />
                <button
                  type="button"
                  className="rounded-xl p-2 text-charcoal/40 hover:bg-white hover:text-charcoal transition-colors"
                  aria-label="Voice input"
                >
                  <Mic className="h-5 w-5" />
                </button>
                <button
                  type="submit"
                  disabled={(!input.trim() && !attachedFile) || isStreaming}
                  className="rounded-xl bg-sage p-2 text-white hover:bg-sage-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {isStreaming ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
            </form>
            <p className="mt-2 text-center text-xs text-charcoal/40">
              I&apos;m an AI coach, not a therapist. For clinical guidance,
              please consult a mental health professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
