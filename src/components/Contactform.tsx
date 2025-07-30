"use client"

// components/ContactForm.tsx

import React, { useState } from 'react'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to API or email service)
    console.log('Submitted:', form)
    alert('Thanks for your message!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-tr from-gray-400 to-gray-300 w-full" id="contact">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-300 shadow-md rounded-lg p-6 space-y-4 text-white">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md  bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactForm
