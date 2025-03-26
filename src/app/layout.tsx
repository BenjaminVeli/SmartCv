import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const FManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FManrope.className}`}
      >
        {children}
      </body>
    </html>
  );
}
