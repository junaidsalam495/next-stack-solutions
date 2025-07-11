"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import clsx from "clsx"
import Image from "next/image"
import WhatsapSvg from "./whatsap-svg"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/works", label: "Our Works" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ]


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white shadow-md"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/haris-logo.png"
              alt="Haris Ahmed"
              width={80}
              height={22}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>


          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group text-sm font-medium transition-colors duration-300 
                  ${pathname === item.href ? "text-[#0C708E]" : "text-black"}`}
              >
                {item.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0C708E] transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/923062249967"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <button className="bg-[#0C708E] hover:bg-[#08596F] text-white rounded-full px-5 py-2 flex items-center gap-2">
                <WhatsapSvg />
                WhatsApp
              </button>
            </a>
          </div>
          <button
            className="text-black lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 border-t border-slate-800"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm py-2 font-medium transition-colors duration-300 
                  ${pathname === item.href ? "text-[#0C708E]" : "text-black"}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <a
                href="https://wa.me/923062249967"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <button className="bg-[#0C708E] hover:bg-[#08596F] text-white rounded-full px-5 py-2 flex items-center gap-2 w-full justify-center">
                  <WhatsapSvg />
                  WhatsApp
                </button>
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
