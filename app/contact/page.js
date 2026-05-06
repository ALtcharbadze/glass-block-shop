'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {

  const [loading, setLoading] = useState(false)

  const [done, setDone] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      await emailjs.send(
        'service_kfo7bo7',
        'template_p45b72m',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        'xAuoQFQRe6t8LheUA'
      )

      setDone(true)

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

    } catch (error) {

      console.log(error)

      alert('დაფიქსირდა შეცდომა')
    }

    setLoading(false)
  }

  return (

    <main className="min-h-screen pt-24 md:pt-32 px-4 md:px-8 pb-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

        {/* LEFT SIDE */}

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">

            CONTACT

          </p>

          <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight mb-8">

            დაგვიკავშირდი

          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 max-w-xl">

            თუ გაინტერესებთ კონკრეტული დიზაინი,
            ინდივიდუალური შეკვეთა ან თანამშრომლობა —
            მოგვწერეთ და მალე დაგიკავშირდებით.

          </p>

          <div className="space-y-8">

            {/* PHONE */}

            <div>

              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                ტელეფონი
              </p>

              <a
                href="tel:+995568504726"
                className="text-lg md:text-2xl text-black hover:text-gray-600 transition"
              >
                +995 568 504 726
              </a>

            </div>

            {/* EMAIL */}

            <div>

              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                ელფოსტა
              </p>

              <a
                href="mailto:samaconceptstore@gmail.com"
                className="text-lg md:text-2xl text-black hover:text-gray-600 transition"
              >
                samaconceptstore@gmail.com
              </a>

            </div>

            {/* LOCATION */}

            <div>

              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                მდებარეობა
              </p>

              <p className="text-lg md:text-2xl text-black">
                თბილისი, საქართველო
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 p-5 md:p-10"
          >

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">

              მოგვწერე

            </h2>

            <div className="space-y-5">

              {/* NAME */}

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  სახელი
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="თქვენი სახელი"
                  className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black transition"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  ელფოსტა
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black transition"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  ტელეფონი
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+995 555 000 000"
                  className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black transition"
                />

              </div>

              {/* MESSAGE */}

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  შეტყობინება
                </label>

                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="მოგვწერეთ თქვენი იდეის შესახებ..."
                  rows={6}
                  className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black transition resize-none"
                />

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-8 py-4 text-white transition ${
                loading
                  ? 'bg-gray-400'
                  : 'bg-black hover:bg-gray-800'
              }`}
            >

              {loading
                ? 'იგზავნება...'
                : 'გაგზავნა'}

            </button>

            {/* SUCCESS */}

            {done && (

              <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-4 text-center">

                შეტყობინება წარმატებით გაიგზავნა ✓

              </div>

            )}

          </form>

        </div>

      </div>

    </main>
  )
}