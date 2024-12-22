"use client"
import "./globals.css";
import { ContextState } from "@/contextAPI/context";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>BookMerce</title>
      </head>
      <ContextState>
        <body className="overflow-x-hidden">
          {children}
          {pathname === "/SignIn" || pathname === "/SignUp" ? "" : <Footer />}
        </body>
      </ContextState>
    </html>
  );
}
