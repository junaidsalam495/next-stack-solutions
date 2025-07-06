import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import WhatsapSvg from "./whatsap-svg"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/haris-logo.png"
                alt="Haris Ahmed"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-white text-sm my-4">
              Step into the realm of technological excellence with Haris Ahmed - your trusted partner in
              driving business innovation and success on a global scale.
            </p>
            <p className="text-white text-sm mb-4">
              At Haris Ahmed, we stand proudly at the vanguard of technological advancement, offering
              customized solutions to address the diverse needs of businesses worldwide. Backed by a team of seasoned
              professionals, we specialize in delivering state-of-the-art IT services and solutions tailored to propel
              your business forward in the digital landscape.
            </p>
          </div>

          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <span
              className="absolute left-0 top-8 h-[2px] bg-[#0C708E] transition-all duration-300 w-32"
            />
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[#0C708E] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#0C708E] text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#0C708E] text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-white hover:text-[#0C708E] text-sm">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <span
              className="absolute left-0 top-8 h-[2px] bg-[#0C708E] transition-all duration-300 w-32"
            />
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white hover:text-[#0C708E] text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-[#0C708E] text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-[#0C708E] text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <span className="absolute left-0 top-8 h-[2px] bg-[#0C708E] transition-all duration-300 w-32" />

            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-white hover:text-[#0C708E] mt-0.5" />
                <a href="mailto:harisahmed88888@gmail.com" className="text-white hover:text-[#0C708E] hover:underline">
                  harisahmed88888@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/923062249967"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#0C708E] hover:underline">+92 306 2249967</a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/923708622374"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#0C708E] hover:underline">+92 370 8622374</a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/923171011890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#0C708E] hover:underline">+92 317 1011890</a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/923172043030"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#0C708E] hover:underline">+92 317 2043030</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            Copyright © 2025 Haris Ahmed. All Rights Reserved By{" "}
            <span className="text-[#0C708E]">Haris Ahmed</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
