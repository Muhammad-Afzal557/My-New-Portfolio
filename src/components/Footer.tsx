

// components/Footer.tsx

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo or Name */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">YourName</h2>
          <p className="text-sm text-gray-400 mt-2">
            Building modern and scalable web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-blue-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Blog or Services */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-blue-300">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="#" className="hover:underline">Tech Stack</Link></li>
            <li><Link href="#" className="hover:underline">Resume</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-blue-300">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.linkedin.com/in/muhammad-afzal-soomro-259717260" target="_blank" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com/Muhammad-Afzal557" target="_blank" className="hover:underline">GitHub</a></li>
            <li><a href="mailto:your@email.com" className="hover:underline">Email</a></li>
            <li><a href="https://wa.me/923253086449" className="hover:underline">Whatsapp</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
