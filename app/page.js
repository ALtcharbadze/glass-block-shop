import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="px-8 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Handcrafted in Georgia
          </p>

        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
        შუშის ბლოკებით შექმნილი ავეჯი
        </h2>

      <p className="text-gray-500 text-lg mb-8">
      უნიკალური, თანამედროვე ავეჯი არქიტექტურული შუშის ბლოკებით.
        თითოეული ნამუშევარი ხელით მზადდება და სრულიად გამორჩეულია — მაგიდები, თაროები, პედესტალები და სხვა.
      </p>
          <Link href="/shop">
            <button className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition">
              Shop Now
            </button>
          </Link>
        </div>
    <div className="grid grid-cols-2 gap-4">
  <div className="h-64 overflow-hidden rounded-sm bg-gray-100">
    <img src="/table1.jpg" alt="Glass block table" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
  </div>
  <div className="h-64 overflow-hidden rounded-sm bg-gray-100">
    <img src="/padestal1.jpg" alt="Glass block pedestal" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
  </div>
  <div className="h-64 overflow-hidden rounded-sm bg-gray-100">
    <img src="/padestal2.jpg" alt="Glass block pedestal lit" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
  </div>
  <div className="h-64 overflow-hidden rounded-sm bg-gray-100">
    <img src="/Chair1.jpg" alt="Glass block chair" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
  </div>
</div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">ჩვენი კოლექცია</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
  { title: 'Coffee Tables', desc: 'შუშის ბლოკებისგან შექმნილი ელეგანტური ყავის მაგიდები, რომლებიც შენს ინტერიერს განსაკუთრებულ ხასიათს შესძენს.', image: '/table1.jpg' },
  { title: 'Pedestals & Stands', desc: 'იდეალური სადგამები მცენარეებისა და დეკორისთვის, შუშის ბლოკებით და ინტეგრირებული LED განათებით.', image: '/padestal2.jpg' },
  { title: 'Custom Orders', desc: 'გაგვიზიარე შენი იდეა და ჩვენ მას რეალობად ვაქცევთ.', image: '/custom1.jpg' },
].map((item) => (
  <div key={item.title} className="bg-white rounded-sm shadow-sm hover:shadow-md transition overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover hover:scale-105 transition duration-300"
      />
    </div>
    <div className="p-8">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
      <p className="text-gray-500 text-sm">{item.desc}</p>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center text-sm text-gray-400 border-t border-gray-100">
        © 2026 SaMa Studio. All rights reserved.
      </footer>
    </main>
  )
}