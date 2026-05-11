import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#cfe3ea]">
      

{/* Hero Section */}

<section className="page-container section-spacing grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center overflow-hidden">

  {/* LEFT */}

  <div>

    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-600 mb-4">
      Handcrafted in Georgia
    </p>

    <h1
      className="
      text-[2.7rem]
      sm:text-[3.4rem]
      md:text-6xl
      leading-[0.92]
      md:leading-none
      tracking-tighter
      text-gray-900
      mb-6
      wrap-break-word
      max-w-[12ch]
      "
    >
      SaMa Concept Store ექსპერიმენტული ლაბორატორია, ხელნაკეთი ავეჯი
    </h1>

    <p
      className="
      text-[1rem]
      md:text-lg
      leading-[1.8]
      text-gray-700
      mb-8
      max-w-xl
      "
    >
      SaMa არის ექსპერიმენტული ლაბორატორია, სადაც მასალები,
      ფორმები და იდეები მუდმივად იცვლება და ახალ მნიშვნელობას
      იძენს. აქ იქმნება ობიექტები, რომლებიც ერთდროულად არის
      ფუნქციური და ხელოვნების ნიმუში, არა უბრალოდ ნივთი,
      არამედ სივრცითი ობიექტი, რომელიც გარემოს ხასიათს და
      ატმოსფეროს ცვლის.
    </p>

    <Link href="/shop">

      <button
        className="
        button-primary
        px-8
        py-4
        rounded-2xl
        text-sm
        uppercase
        tracking-[0.2em]
        "
      >
        Shop Now
      </button>

    </Link>

  </div>

  {/* RIGHT */}

  <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    mt-2
    "
  >

    <div className="h-60 sm:h-64 overflow-hidden rounded-3xl bg-gray-100 soft-shadow">
      <img
        src="/table1.jpg"
        alt="Glass block table"
        className="w-full h-full object-cover image-hover"
      />
    </div>

    <div className="h-60 sm:h-64 overflow-hidden rounded-3xl bg-gray-100 soft-shadow">
      <img
        src="/table2.jpg"
        alt="Glass block pedestal"
        className="w-full h-full object-cover image-hover"
      />
    </div>

    <div className="h-60 sm:h-64 overflow-hidden rounded-3xl bg-gray-100 soft-shadow">
      <img
        src="/table3.jpg"
        alt="Glass block pedestal lit"
        className="w-full h-full object-cover image-hover"
      />
    </div>

    <div className="h-60 sm:h-64 overflow-hidden rounded-3xl bg-gray-100 soft-shadow">
      <img
        src="/table4.jpg"
        alt="Glass block chair"
        className="w-full h-full object-cover image-hover"
      />
    </div>

  </div>

</section>

      {/* Featured Categories */}
      <section className="bg-gray-50 section-spacing">
        <div className="page-container">
          <h3 className="text-2xl font-italic text-gray-900 mb-12 text-center">ჩვენი კოლექცია</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-center">
            {[
  { title: 'Coffee Tables', desc: 'შუშის ბლოკებისგან შექმნილი ელეგანტური ყავის მაგიდები, რომლებიც შენს ინტერიერს განსაკუთრებულ ხასიათს შესძენს.', image: '/table5.jpg' },
  { title: 'Pedestals & Stands', desc: 'იდეალური სადგამები მცენარეებისა და დეკორისთვის, შუშის ბლოკებით და ინტეგრირებული LED განათებით.', image: '/padestal4.jpg' },
].map((item) => (
  <Link
  href="/shop"
  key={item.title}
  className="card-box hover-lift soft-shadow overflow-hidden block"
>
    <div className="h-55 md:h-65 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover object-center image-hover"
      />
    </div>
    <div className="card-padding">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
      <p className="text-gray-500 text-sm">{item.desc}</p>
    </div>
  </Link>
))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 text-center text-sm text-gray-400 border-t border-gray-100">
        © 2026 SaMa Studio. All rights reserved.
      </footer>
    </main>
  )
}