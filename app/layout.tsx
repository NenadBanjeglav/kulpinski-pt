import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kulpinski PT",
  description:
    "Welcome to Kulpinski PT! Ready to get fit and feel great? You've come to the right place. At Kulpinski PT, we're all about personalized fitness training that fits your unique goals. Whether you want to build muscle, shed some pounds, or just feel better overall, we've got you covered. Our expert trainer Milos Kulpinski will create a workout plan just for you and offer nutritional tips to keep you on track. Join us today and let's start your journey to a healthier, happier you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
