import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Practical courses taught by people who do the work. Learn design, technology, business and more — one focused lesson at a time.";

export const metadata: Metadata = {
  title: "Luma — Build skills that actually move you forward",
  description,
  applicationName: "Luma",
  keywords: ["online courses", "practical learning", "design", "technology", "Luma"],
  openGraph: {
    title: "Luma — Build skills that actually move you forward",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Luma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma — Build skills that actually move you forward",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
