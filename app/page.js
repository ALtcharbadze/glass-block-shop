import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">GLASBLOCK STUDIO</h1>
        <div className="flex gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/shop" className="hover:text-black transition">Shop</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Handcrafted in Germany</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Furniture made from Glass Blocks
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Unique, modern furniture built from architectural glass blocks. 
            Each piece is handcrafted and one of a kind — tables, shelves, pedestals and more.
          </p>
          <Link href="/shop">
            <button className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 h-64 rounded-sm flex items-center justify-center text-gray-400 text-sm">
            Photo 1
          </div>
          <div className="bg-gray-200 h-64 rounded-sm flex items-center justify-center text-gray-400 text-sm">
            Photo 2
          </div>
          <div className="bg-gray-200 h-64 rounded-sm flex items-center justify-center text-gray-400 text-sm">
            Photo 3
          </div>
          <div className="bg-gray-100 h-64 rounded-sm flex items-center justify-center text-gray-400 text-sm">
            Photo 4
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Our Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Coffee Tables', desc: 'Stunning glass block coffee tables for your living room.' },
              { title: 'Pedestals & Stands', desc: 'Perfect plant stands and display pedestals with LED lighting.' },
              { title: 'Custom Orders', desc: 'Tell us your vision and we build it from glass blocks.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition">
                <div className="bg-gray-100 h-40 mb-6 rounded-sm flex items-center justify-center text-gray-400 text-sm">
                  Photo
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100">
        © 2025 Glasblock Studio. All rights reserved.
      </footer>
    </main>
  )
}