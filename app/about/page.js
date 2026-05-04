import Link from 'next/link'

export default function About() {
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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Our Story</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            We turn glass blocks into furniture people love
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            Glasblock Studio was born from a simple idea — glass blocks are beautiful, 
            strong, and completely underused in furniture design. We changed that.
          </p>
          <p className="text-gray-500 text-lg">
            Every piece we make is handcrafted, unique, and built to last. 
            From coffee tables to illuminated pedestals, we combine raw materials 
            with modern design to create furniture that becomes the centerpiece of any room.
          </p>
        </div>
        <div className="bg-gray-100 h-96 rounded-sm flex items-center justify-center text-gray-400 text-sm">
          Studio Photo
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">What We Stand For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🧱',
                title: 'Handcrafted Quality',
                desc: 'Every single piece is built by hand. No mass production, no shortcuts. Just honest craftsmanship.'
              },
              {
                icon: '✨',
                title: 'Unique Design',
                desc: 'Glass blocks have a natural beauty — the way light moves through them is unlike any other material.'
              },
              {
                icon: '🌿',
                title: 'Made to Last',
                desc: 'We build furniture that lasts decades, not seasons. Solid, stable and timeless.'
              }
            ].map(item => (
              <div key={item.title} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'You Order', desc: 'Choose a piece from our shop or describe your custom vision.' },
            { step: '02', title: 'We Design', desc: 'We plan your piece and source the best glass blocks available.' },
            { step: '03', title: 'We Build', desc: 'Your furniture is handcrafted with care in our studio.' },
            { step: '04', title: 'We Deliver', desc: 'We carefully pack and ship your piece directly to your door.' },
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="text-4xl font-bold text-gray-100 mb-2">{item.step}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to order your piece?</h3>
        <p className="text-gray-400 mb-8">Browse our collection or get in touch for a custom order.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/shop">
            <button className="bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-100 transition">
              Shop Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100">
        © 2025 Glasblock Studio. All rights reserved.
      </footer>
    </main>
  )
}