'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  return (

    <main className="min-h-screen pt-24 md:pt-32 pb-20">

      <div className="page-container">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="section-title mb-3">

            თქვენი კალათა

          </h1>

          <p className="section-subtitle">

            {totalItems} პროდუქტი

          </p>

        </div>

        {/* EMPTY */}

        {cart.length === 0 ? (

          <div className="card-box card-padding text-center py-20 md:py-28">

            <div className="text-6xl mb-6">

              🛒

            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">

              კალათა ცარიელია

            </h2>

            <p className="text-gray-500 mb-8 text-base md:text-lg">

              დაამატეთ პროდუქტები კოლექციიდან

            </p>

            <Link href="/shop">

              <button className="button-primary rounded-2xl px-8 py-4 text-base md:text-lg">

                კოლექციაზე გადასვლა

              </button>

            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-14 items-start">

            {/* LEFT SIDE */}

            <div className="card-box card-padding">

              <div className="space-y-6">

                {cart.map((item, index) => (

                  <div
                    key={`${item.id}-${index}`}
                    className="flex gap-4 md:gap-6 items-center border-b border-gray-100 pb-6"
                  >

                    {/* IMAGE */}

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl bg-gray-100"
                    />

                    {/* INFO */}

                    <div className="flex-1 min-w-0">

                      <h3 className="font-semibold text-black text-base md:text-lg leading-snug mb-2">

                        {item.name}

                      </h3>

                      <p className="text-sm md:text-base text-gray-500 mb-3">

                        {item.price.toFixed(2)} ლარი × {item.qty}

                      </p>

                      <button
                        onClick={() => removeFromCart(item.id, index)}
                        className="text-red-500 text-sm smooth-transition hover:opacity-60"
                      >

                        წაშლა

                      </button>

                    </div>

                    {/* PRICE */}

                    <div className="text-right">

                      <p className="font-bold text-black text-base md:text-lg whitespace-nowrap">

                        {(item.price * item.qty).toFixed(2)} ლარი

                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* CLEAR */}

              <button
                onClick={clearCart}
                className="mt-8 border border-gray-300 rounded-xl px-5 py-3 text-sm text-gray-600 smooth-transition hover:border-black hover:text-black"
              >

                კალათის გასუფთავება

              </button>

            </div>

            {/* RIGHT SIDE */}

            <div className="card-box card-padding sticky top-28">

              <h2 className="text-2xl font-bold text-black mb-8">

                შეკვეთის დეტალები

              </h2>

              {/* PRODUCTS */}

              <div className="space-y-4 mb-8">

                {cart.map((item, index) => (

                  <div
                    key={`${item.id}-${index}`}
                    className="flex justify-between gap-4 text-sm md:text-base"
                  >

                    <span className="text-gray-600 leading-relaxed">

                      {item.name} × {item.qty}

                    </span>

                    <span className="text-black font-medium whitespace-nowrap">

                      {(item.price * item.qty).toFixed(2)} ლარი

                    </span>

                  </div>

                ))}

              </div>

              {/* TOTAL */}

              <div className="flex justify-between items-center border-t border-gray-200 pt-6 mb-8">

                <span className="text-lg md:text-xl font-semibold text-black">

                  სულ

                </span>

                <span className="text-2xl md:text-3xl font-bold text-black">

                  {totalPrice.toFixed(2)} ლარი

                </span>

              </div>

              {/* BUTTONS */}

              <div className="space-y-4">

                <Link href="/checkout">

                  <button className="button-primary rounded-2xl w-full py-4 text-base md:text-lg">

                    შეკვეთის გაფორმება

                  </button>

                </Link>

                <Link href="/shop">

                  <button className="w-full border border-gray-300 rounded-2xl py-4 text-gray-700 smooth-transition hover:border-black hover:text-black">

                    შოპინგის გაგრძელება

                  </button>

                </Link>

              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  )
}