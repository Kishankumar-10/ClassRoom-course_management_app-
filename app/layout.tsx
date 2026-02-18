import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarGate from "@/components/NavbarGate";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Classroom",
  description: "Build Better Courses. Deliver Better Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9FAFB]`}
        suppressHydrationWarning
      >
        <NavbarGate />
        {children}
      </body>
    </html>
  );
}
