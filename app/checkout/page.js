'use client'

import { useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart()

  const [step, setStep] = useState(1)
  const [method, setMethod] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

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

  const handleContinue = (e) => {
    e.preventDefault()

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      return
    }

    setStep(2)
  }

  const handleOrder = async () => {
    if (!method) return

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
          method:
            method === 'tbc'
              ? 'TBC Bank'
              : 'Bank of Georgia',

          products: productsText,
          total: totalPrice,
        },
        'xAuoQFQRe6t8LheUA'
      )

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
      <main className="min-h-screen flex items-center justify-center px-8">

        <div className="bg-white border border-gray-200 p-12 max-w-xl w-full text-center">

          <div className="text-6xl mb-6">🎉</div>

          <h1 className="text-4xl font-bold text-black mb-4">
            შეკვეთა მიღებულია
          </h1>

          <p className="text-gray-700 mb-8">
            მადლობა შეკვეთისთვის. მალე დაგიკავშირდებით.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-6 text-left mb-8">

            <h3 className="font-bold text-black mb-4">
              გადახდის ინფორმაცია
            </h3>

            {method === 'tbc' ? (
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>ბანკი:</strong> TBC Bank</p>
                <p><strong>IBAN:</strong> GE00TB0000000000000000</p>
                <p><strong>მიმღები:</strong> SaMa Studio</p>
                <p className="font-bold text-black pt-2">
                  გადასახდელი თანხა: €{totalPrice}
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>ბანკი:</strong> Bank of Georgia</p>
                <p><strong>IBAN:</strong> GE00BG0000000000000000</p>
                <p><strong>მიმღები:</strong> SaMa Studio</p>
                <p className="font-bold text-black pt-2">
                  გადასახდელი თანხა: €{totalPrice}
                </p>
              </div>
            )}

          </div>

          <Link href="/">
            <button className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition">
              მთავარ გვერდზე დაბრუნება
            </button>
          </Link>

        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 md:pt-28 pb-16 md:pb-20 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold text-black mb-3">
          შეკვეთის გაფორმება
        </h1>

        <p className="text-gray-700 mb-12">
          აირჩიეთ გადახდის მეთოდი
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

          {/* LEFT */}
          <div>

            {/* STEP 1 */}
            {step === 1 && (
              <form
                onSubmit={handleContinue}
                className="bg-white border border-gray-200 p-8"
              >

                <h2 className="text-2xl font-bold text-black mb-6">
                  საკონტაქტო ინფორმაცია
                </h2>

                <div className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="სახელი"
                    className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ელფოსტა"
                    className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black"
                  />

                  <input
                    type="text"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="ტელეფონი"
                    className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black"
                  />

                  <input
                    type="text"
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="მისამართი"
                    className="w-full border border-gray-300 px-4 py-4 outline-none focus:border-black"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 mt-6 hover:bg-gray-800 transition"
                >
                  გადახდის მეთოდის არჩევა
                </button>

              </form>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>

                <div className="bg-white border border-gray-200 p-8 mb-6">

                  <h2 className="text-2xl font-bold text-black mb-6">
                    გადახდის მეთოდი
                  </h2>

                  {/* TBC */}
                  <div
                    onClick={() => setMethod('tbc')}
                    className={`border-2 p-5 cursor-pointer transition mb-4 ${
                      method === 'tbc'
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200'
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">

                        {method === 'tbc' && (
                          <div className="w-2.5 h-2.5 bg-black rounded-full" />
                        )}

                      </div>

                      <div>
                        <p className="font-bold text-black">
                          🏦 TBC Bank
                        </p>

                        <p className="text-sm text-gray-600">
                          საბანკო გადარიცხვა
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* BOG */}
                  <div
                    onClick={() => setMethod('bog')}
                    className={`border-2 p-5 cursor-pointer transition ${
                      method === 'bog'
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200'
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">

                        {method === 'bog' && (
                          <div className="w-2.5 h-2.5 bg-black rounded-full" />
                        )}

                      </div>

                      <div>
                        <p className="font-bold text-black">
                          🏦 Bank of Georgia
                        </p>

                        <p className="text-sm text-gray-600">
                          საბანკო გადარიცხვა
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                {/* PAYMENT INFO */}
                {method && (
                  <div className="bg-white border border-gray-200 p-8 mb-6">

                    <h3 className="text-xl font-bold text-black mb-4">
                      საბანკო დეტალები
                    </h3>

                    {method === 'tbc' ? (
                      <div className="space-y-2 text-gray-700">
                        <p><strong>ბანკი:</strong> TBC Bank</p>
                        <p><strong>IBAN:</strong> GE00TB0000000000000000</p>
                        <p><strong>მიმღები:</strong> SaMa Studio</p>
                        <p><strong>თანხა:</strong> {totalPrice} ლარი</p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-gray-700">
                        <p><strong>ბანკი:</strong> Bank of Georgia</p>
                        <p><strong>IBAN:</strong> GE00BG0000000000000000</p>
                        <p><strong>მიმღები:</strong> SaMa Studio</p>
                        <p><strong>თანხა:</strong> {totalPrice} ლარი</p>
                      </div>
                    )}

                  </div>
                )}

                {/* SUBMIT */}
                <button
                  onClick={handleOrder}
                  disabled={!method || loading}
                  className={`w-full py-4 transition ${
                    method
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                >
                  {loading
                    ? 'იგზავნება...'
                    : 'შეკვეთის გაფორმება'}
                </button>

              </div>
            )}

          </div>

         {/* RIGHT */}
<div>

  <div className="bg-white border border-gray-200 p-5 md:p-8">

    <h2 className="text-2xl font-bold text-black mb-6">
      შეკვეთის სარეზიუმე
    </h2>

    <div className="space-y-5">

      {cart.map((item) => (

        <div
          key={item.id}
          className="flex items-center gap-4 border-b border-gray-100 pb-5"
        >

          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
          />

          {/* INFO */}
          <div className="flex-1">

            <p className="font-semibold text-black text-sm md:text-lg leading-snug">
              {item.name}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              რაოდენობა: {item.qty}
            </p>

          </div>

          {/* PRICE */}
          <p className="font-bold text-black whitespace-nowrap text-sm md:text-lg">
            {item.price * item.qty} ლარი
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
        {totalPrice} ლარი
      </span>

    </div>

  </div>

</div>

        </div>

      </div>
    </main>
  )
}