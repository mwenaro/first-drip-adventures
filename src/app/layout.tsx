
import "./globals.css";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth/auth";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";


interface RootLayoutProps extends PropsWithChildren {}

export const metadata: Metadata = {
  title: {
    default: "First Drip Adventures | Explore Kenya & Beyond",
    template: "%s | First Drip Adventures",
  },
  description:
    "First Drip Adventures offers unique travel experiences across Kenya and beyond. Explore stunning destinations, unforgettable journeys, and discover the adventure of a lifetime.",

  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "First Drip Adventures",
    "Travel Kenya",
    "Adventure Tours",
    "Explore Kenya",
    "Safari Tours",
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  const session = auth;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Header />
        <div className="min-h-screen mt-20">
          <Toaster />
          <Providers session={session}>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
