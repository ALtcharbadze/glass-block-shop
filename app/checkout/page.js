'use client'

import { useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { useCart } from '../context/CartContext'

export default function Checkout() {

  const { cart, totalPrice, clearCart } = useCart()

  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const [finalTotal, setFinalTotal] = useState(0)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const productsText = cart
    .map((item) => `${item.name} × ${item.qty}`)
    .join('\n')

  const handleContinue = async (e) => {

    e.preventDefault()

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      return
    }

    setLoading(true)

    try {

      await emailjs.send(
        'service_kfo7bo7',
        'template_rxezl9w',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          products: productsText,
          total: totalPrice.toFixed(2),
        },
        'xAuoQFQRe6t8LheUA'
      )

      setFinalTotal(totalPrice)

      clearCart()

      setDone(true)

    } catch (error) {

      console.log(error)

      alert('დაფიქსირდა შეცდომა')
    }

    setLoading(false)
  }

  // SUCCESS PAGE

  if (done) {

    return (

      <main className="min-h-screen flex items-center justify-center px-4 py-20">

        <div className="card-box p-8 md:p-12 max-w-xl w-full text-center">

          <div className="text-6xl mb-6">

            🎉

          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-tight">

            მადლობა თქვენი შეკვეთისთვის!

          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed">

            თქვენი შეკვეთის დეტალები წარმატებით მივიღეთ.
            ძალიან მალე დაგიკავშირდებით.

          </p>

          {/* INFO */}

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-10">

            <h3 className="font-bold text-black text-lg mb-5">

              შეკვეთის ინფორმაცია

            </h3>

            <div className="space-y-3 text-sm md:text-base text-gray-700">

              <p>
                <strong>სახელი:</strong> {form.name}
              </p>

              <p>
                <strong>ტელეფონი:</strong> {form.phone}
              </p>

              <p>
                <strong>ელფოსტა:</strong> {form.email}
              </p>

              <p className="font-bold text-black pt-3 text-base md:text-lg">

                გადასახდელი თანხა:
                {' '}
                {finalTotal.toFixed(2)} ლარი

              </p>

            </div>

          </div>

          <Link href="/">

            <button className="button-primary rounded-2xl px-8 py-4 text-base md:text-lg">

              მთავარ გვერდზე დაბრუნება

            </button>

          </Link>

        </div>

      </main>
    )
  }

  return (

    <main className="min-h-screen pt-24 md:pt-28 pb-20">

      <div className="page-container">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="section-title mb-3">

            შეკვეთის გაფორმება

          </h1>

          <p className="section-subtitle">

            შეავსეთ ქვემოთ მოცემული ფორმა

          </p>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-14 items-start">

          {/* LEFT */}

          <div>

            <form
              onSubmit={handleContinue}
              className="card-box card-padding"
            >

              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">

                საკონტაქტო ინფორმაცია

              </h2>

              {/* INPUTS */}

              <div className="space-y-5">

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="სახელი"
                  className="w-full border border-gray-300 px-4 py-4 rounded-2xl outline-none focus:border-black smooth-transition"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ელფოსტა"
                  className="w-full border border-gray-300 px-4 py-4 rounded-2xl outline-none focus:border-black smooth-transition"
                />

                <input
                  type="text"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="ტელეფონი"
                  className="w-full border border-gray-300 px-4 py-4 rounded-2xl outline-none focus:border-black smooth-transition"
                />

                <input
                  type="text"
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  placeholder="მისამართი"
                  className="w-full border border-gray-300 px-4 py-4 rounded-2xl outline-none focus:border-black smooth-transition"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="button-primary rounded-2xl w-full py-4 text-base md:text-lg mt-8"
              >

                {loading
                  ? 'იგზავნება...'
                  : 'შეკვეთის გაგზავნა'}

              </button>

            </form>

          </div>

          {/* RIGHT */}

          <div className="card-box card-padding sticky top-28">

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">

              შეკვეთის დეტალები

            </h2>

            {/* PRODUCTS */}

            <div className="space-y-6">

              {cart.map((item, index) => (

                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 md:gap-6 border-b border-gray-100 pb-6"
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl"
                  />

                  {/* INFO */}

                  <div className="flex-1 min-w-0">

                    <p className="font-semibold text-black text-sm md:text-lg leading-snug mb-2">

                      {item.name}

                    </p>

                    <p className="text-sm text-gray-500">

                      რაოდენობა: {item.qty}

                    </p>

                  </div>

                  {/* PRICE */}

                  <p className="font-bold text-black whitespace-nowrap text-sm md:text-lg">

                    {(item.price * item.qty).toFixed(2)} ლარი

                  </p>

                </div>

              ))}

            </div>

            {/* TOTAL */}

            <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-200">

              <span className="text-xl md:text-2xl font-bold text-black">

                სულ

              </span>

              <span className="text-2xl md:text-3xl font-bold text-black">

                {totalPrice.toFixed(2)} ლარი

              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}