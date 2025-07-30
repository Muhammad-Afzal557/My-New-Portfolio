import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-gray-500 to-gray-300 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 gap-10">

        {/* Left Section */}
        <section className="w-full md:w-1/2 flex flex-col gap-4 text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Hello
            <span className="text-2xl animate-spin">!</span>
          </h2>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap gap-2">
            I am a Web
            <span className="text-white animate-pulse">Developer</span>
          </h1>

          <p className="text-sm text-justify text-gray-100">
            I&apos;ve learned web development with a strong focus on modern technologies. On the frontend, I work with <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and responsive UI design.
          </p>

          <p className="text-sm text-gray-200">
            I&apos;m also exploring <strong>Agentic AI</strong>, <strong>OpenAI Agents SDK</strong>, <strong>cloud-native tools</strong>, and modern coding logic to build smarter and scalable applications.
          </p>

          <Link href="https://wa.me/923253086449" target="_blank">
            <button className="w-full mt-4 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-lg">
              <Image src="/images.jpeg" alt="WhatsApp" width={28} height={28} className="rounded-full animate-bounce" />
              Chat on WhatsApp
            </button>
          </Link>
        </section>

        {/* Right Section */}
        <section className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/vector-image.png"
            alt="Hero Illustration"
            width={300}
            height={300}
            className="object-contain"
          />
        </section>
      </div>
    </div>
  )
}

export default Hero
