import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoToTopButton } from "@/components/go-to-top"
import { WhatsAppFloatingButton } from "@/components/whats-app-floating-button"
import ApolloClientProvider from "@/lib/apollo-client-provider"

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Haris Ahmed - Portfolio",
  description: "Professional web development and digital solutions",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloClientProvider>
          <Header />
          <main>{children}</main>
          <GoToTopButton />
          <WhatsAppFloatingButton />
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  )
}
