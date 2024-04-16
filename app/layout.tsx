import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css"

import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Video Chat",
  description: "Generated by create next app",
  icons: {
    icon:"/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1 text-white`}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
