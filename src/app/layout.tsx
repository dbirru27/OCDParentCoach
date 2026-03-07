import type { Metadata } from "next";
import { Source_Sans_3, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EmergencyBanner } from "@/components/emergency-banner";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OCD Parent Coach",
    template: "%s | OCD Parent Coach",
  },
  description:
    "AI-powered guidance for parents navigating childhood OCD. Evidence-based. Compassionate. 24/7.",
  keywords: [
    "OCD",
    "parent coaching",
    "childhood OCD",
    "ERP",
    "exposure response prevention",
    "pediatric OCD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <EmergencyBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
