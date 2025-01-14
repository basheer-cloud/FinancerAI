import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Financer",
  description: "Expense tracker for you daily life!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* {header} */}
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors />
        {/* {footer} */}
        <footer className="bg-violet-200 py-6">
          <div className="container mx-auto px-4 text-center text-violet-900">
            <p>© [2024] [FinancerAI]. All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
