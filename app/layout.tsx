import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "SportsTradeX - Expert Online Courses & Learning Platform",
  description:
    "Get premium online courses from verified experts. Learn in-demand skills and advance your career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}

import "./globals.css";
