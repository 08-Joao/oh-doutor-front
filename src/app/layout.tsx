import type { Metadata } from "next";
import { Public_Sans, Roboto } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { AuthProvider } from '@/contexts/AuthContext'


const publicSans =  Public_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${publicSans.variable} ${roboto.variable}  antialiased`}
      >
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
