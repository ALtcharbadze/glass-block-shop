'use client'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart()

  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-8 pt-28 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          თქვენი კალათა
        </h2>
        <p className="text-gray-500 mb-10">
          {totalItems} პროდუქტი
        </p>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-xl font-bold mb-2">კალათა ცარიელია</h3>
            <p className="text-gray-500 mb-6">
              დაამატეთ პროდუქტები კოლექციიდან
            </p>

            <Link href="/shop">
              <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
                კოლექციაზე გადასვლა
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT - ITEMS */}
            <div className="space-y-6">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center border-b border-gray-200 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover bg-gray-100"
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      €{item.price} × {item.qty}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-1 hover:underline"
                    >
                      წაშლა
                    </button>
                  </div>

                  <p className="font-bold text-gray-900">
                    €{item.price * item.qty}
                  </p>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:border-black hover:text-black transition"
              >
                კალათის გასუფთავება
              </button>
            </div>

            {/* RIGHT - SUMMARY */}
            <div className="bg-gray-50 p-6 rounded-sm shadow-sm">
              <h3 className="font-bold text-lg mb-6 text-gray-900">
                შეკვეთის სარეზიუმე
              </h3>

              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} × {item.qty}
                    </span>
                    <span className="text-gray-900">
                      €{item.price * item.qty}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t pt-4 mb-6">
                <span className="font-semibold text-gray-900">სულ</span>
                <span className="font-bold text-xl text-black">
                  €{totalPrice}
                </span>
              </div>

              <Link href="/contact">
                <button className="w-full bg-black text-white py-4 hover:bg-gray-800 transition">
                  შეკვეთის გაფორმება
                </button>
              </Link>

              <Link href="/shop">
                <button className="w-full mt-3 border border-gray-300 py-3 text-gray-700 hover:border-black hover:text-black transition">
                  შოპინგის გაგრძელება
                </button>
              </Link>
            </div>

          </div>
        )}
      </div>

    </main>
  )
}