'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'ზოგადი',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#dce7f0]">

      {/* CONTENT */}
      <section className="flex-1 pt-32 pb-20 px-8">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-10 text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Contact
            </p>

            <h1 className="text-6xl font-bold text-black mb-6">
              დაგვიკავშირდი
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              გაქვს შეკითხვა, იდეა ან გსურს ინდივიდუალური დიზაინის შეკვეთა?
              მოგვწერე და ერთად შევქმნათ რაღაც განსაკუთრებული.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="bg-white border border-gray-200 p-10">

              <h2 className="text-3xl font-bold text-black mb-10">
                ინფორმაცია
              </h2>

              <div className="space-y-10">

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    ელფოსტა
                  </p>

                  <p className="text-lg font-medium text-black">
                    hello@samastudio.ge
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    ადგილმდებარეობა
                  </p>

                  <p className="text-lg font-medium text-black">
                    თბილისი, საქართველო
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    მიწოდება
                  </p>

                  <p className="text-lg font-medium text-black">
                    თბილისის მასშტაბით
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    პასუხის დრო
                  </p>

                  <p className="text-lg font-medium text-black">
                    12-24 საათი
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white border border-gray-200 p-10">

              {!sent ? (
                <>
                  <h2 className="text-3xl font-bold text-black mb-10">
                    მოგვწერე
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="სახელი"
                      className="w-full border border-gray-300 px-5 py-4 text-black outline-none focus:border-black"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ელფოსტა"
                      className="w-full border border-gray-300 px-5 py-4 text-black outline-none focus:border-black"
                    />

                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-5 py-4 text-black outline-none focus:border-black"
                    >
                      <option>ზოგადი</option>
                      <option>ინდივიდუალური შეკვეთა</option>
                      <option>ფასი</option>
                      <option>მიწოდება</option>
                      <option>სხვა</option>
                    </select>

                    <textarea
                      name="message"
                      required
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="მოგვწერე შენი იდეის შესახებ..."
                      className="w-full border border-gray-300 px-5 py-4 text-black outline-none focus:border-black resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition"
                    >
                      გაგზავნა
                    </button>

                  </form>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">

                  <div className="text-6xl mb-6">
                    ✉️
                  </div>

                  <h3 className="text-4xl font-bold text-black mb-4">
                    შეტყობინება გაიგზავნა
                  </h3>

                  <p className="text-gray-700 mb-8 text-lg">
                    მადლობა ინტერესისთვის.
                    მალე დაგიკავშირდებით.
                  </p>

                  <button
                    onClick={() => setSent(false)}
                    className="border border-black px-8 py-4 text-black hover:bg-black hover:text-white transition"
                  >
                    ახალი შეტყობინება
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-300 py-8 text-center text-gray-500 text-sm bg-[#dce7f0]">
        © 2026 SaMa Concept Store. All rights reserved.
      </footer>

    </main>
  )
}