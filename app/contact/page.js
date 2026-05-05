'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'ზოგადი',
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
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen">

      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            დაგვიკავშირდი
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            დაგვიკავშირდი
          </h2>

          <p className="text-gray-500 mb-10">
            გაინტერესებს რომელიმე ნამუშევარი ან საკუთარი იდეის განხორციელება?
            მოგვწერე და ერთად შევქმნათ რაღაც უნიკალური.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400">ელფოსტა</p>
              <p className="text-gray-900 font-medium">hello@samastudio.ge</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">ადგილმდებარეობა</p>
              <p className="text-gray-900 font-medium">საქართველო</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">მიწოდება</p>
              <p className="text-gray-900 font-medium">მთელ საქართველოში</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">პასუხის დრო</p>
              <p className="text-gray-900 font-medium">12–24 საათში</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {sent ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-6">✉️</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                შეტყობინება წარმატებით გაიგზავნა
              </h3>

              <p className="text-gray-600 mb-8">
                მადლობა! მალე დაგიკავშირდებით.
              </p>

              <button
                onClick={() => setSent(false)}
                className="border border-black px-8 py-3 text-sm uppercase tracking-widest text-gray-900 hover:bg-black hover:text-white transition"
              >
                ახალი შეტყობინება
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="text-xs text-gray-400">სახელი</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition"
                  placeholder="სახელი გვარი"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">ელფოსტა</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">თემა</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition"
                >
                  <option>ზოგადი</option>
                  <option>ინდივიდუალური შეკვეთა</option>
                  <option>ფასი</option>
                  <option>მიწოდება</option>
                  <option>სხვა</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-400">შეტყობინება</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition"
                  placeholder="მოგვიყევი შენი იდეის შესახებ..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition"
              >
                {loading ? 'იგზავნება...' : 'გაგზავნა'}
              </button>

            </form>
          )}
        </div>
        
      </div>

      {/* Footer */}
      
      <footer className="px-8 py-4 text-center text-sm text-gray-400 border-t border-gray-100 mt-94">
        © 2026 SaMa Studio. All rights reserved.
      </footer>

    </main>
  )
}