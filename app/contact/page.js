'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // We'll connect real email later
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer">GLASBLOCK STUDIO</h1>
        </Link>
        <div className="flex gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/shop" className="hover:text-black transition">Shop</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side - Info */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Get in touch</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-500 mb-10">
            Interested in a piece? Have a custom order in mind? 
            We'd love to hear from you. All furniture is handcrafted 
            and made to order — reach out and let's create something unique together.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
              <p className="text-gray-900 font-medium">hello@glasblockstudio.de</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Location</p>
              <p className="text-gray-900 font-medium">Germany</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Delivery</p>
              <p className="text-gray-900 font-medium">Shipping within Germany · EU on request</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Response Time</p>
              <p className="text-gray-900 font-medium">Within 24–48 hours</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="text-5xl mb-6">✉️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
              <p className="text-gray-500 mb-8">
                Thank you for reaching out. We'll get back to you within 24–48 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-black transition"
                  placeholder="Aleksandra Müller"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-black transition"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-black transition"
                >
                  <option>General Inquiry</option>
                  <option>Custom Order</option>
                  <option>Pricing Question</option>
                  <option>Shipping Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-black transition resize-none"
                  placeholder="Tell us about the piece you have in mind..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100 mt-8">
        © 2025 Glasblock Studio. All rights reserved.
      </footer>
    </main>
  )
}