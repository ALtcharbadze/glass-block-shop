import Link from 'next/link'

export default function Home() {

  return (

    <main className="min-h-screen bg-[#cfe3ea] overflow-hidden">

      {/* HERO */}

      <section className="page-container py-16 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div className="max-w-155">

            <h1
  className="
  text-[3.4rem]
  sm:text-[4.5rem]
  md:text-[5.4rem]
  lg:text-[6.2rem]
  leading-[0.9]
  tracking-[-0.04em]
  text-[#0f172a]
  mb-8
  italic
  font-light
  "
  style={{
    fontFamily: '"Cormorant Garamond", serif'
  }}
>
  Where Glass Becomes Art

              <span className="block text-[0.72em] mt-4 leading-none">

                ექსპერიმენტული ლაბორატორია,

                <br />

                ხელნაკეთი ავეჯი

              </span>

            </h1>

            <p
              className="
              text-base
              md:text-lg
              leading-[1.9]
              text-gray-700
              mb-10
              max-w-xl
              "
            >

              SaMa არის ექსპერიმენტული ლაბორატორია, სადაც მასალები,
              ფორმები და იდეები მუდმივად იცვლება და ახალ მნიშვნელობას
              იძენს. აქ იქმნება ობიექტები, რომლებიც ერთდროულად არის
              ფუნქციური და ხელოვნების ნიმუში. არა უბრალოდ ნივთი,
              არამედ სივრცითი ობიექტი, რომელიც გარემოს ხასიათს და
              ატმოსფეროს ცვლის.

            </p>

            <Link href="/shop" scroll={true}>

              <button
                className="
                button-primary
                px-9
                py-4
                rounded-2xl
                text-sm
                uppercase
                tracking-[0.22em]
                "
              >

                იხილეთ კოლექცია

              </button>

            </Link>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">

            <div className="overflow-hidden rounded-[28px] h-60 sm:h-80 soft-shadow">

              <img
                src="/table1.jpg"
                alt="Glass block table"
                className="w-full h-full object-cover image-hover"
              />

            </div>

            <div className="overflow-hidden rounded-[28px] h-60 sm:h-80 soft-shadow sm:mt-10">

              <img
                src="/table2.jpg"
                alt="Glass block table"
                className="w-full h-full object-cover image-hover"
              />

            </div>

            <div className="overflow-hidden rounded-[28px] h-60 sm:h-80 soft-shadow">

              <img
                src="/table3.jpg"
                alt="Glass block table"
                className="w-full h-full object-cover image-hover"
              />

            </div>

            <div className="overflow-hidden rounded-[28px] h-80 soft-shadow sm:mt-10">

              <img
                src="/table4.jpg"
                alt="Glass block table"
                className="w-full h-full object-cover image-hover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* COLLECTION */}

      <section className="bg-white/50 backdrop-blur-sm border-t border-white/40 py-20">

        <div className="page-container">

          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4">
              ჩვენი კოლექცია
            </h2>

            <p className="text-gray-600 text-lg">
              ხელნაკეთი მინის ავეჯი თანამედროვე ინტერიერისთვის
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: 'ყავის მაგიდები',
                desc: 'შუშის ბლოკებისგან შექმნილი ელეგანტური ყავის მაგიდები, რომლებიც ინტერიერს განსხვავებულ ხასიათს სძენს.',
                image: '/table5.jpg',
                href: '/shop?category=tables',
              },

              {
                title: 'პედესტალები და სტენდები',
                desc: 'დეკორისა და მცენარეებისთვის შექმნილი უნიკალური სადგამები ინტეგრირებული განათებით.',
                image: '/padestal4.jpg',
                href: '/shop?category=stands',
              },

                {
    title: 'სრული კოლექცია',
    desc: 'იხილეთ SaMa Concept Store-ის სრული კოლექცია და ყველა ხელნაკეთი ინტერიერის ობიექტი.',
    image: '/table2.jpg',
    href: '/shop',
  },

            ].map((item) => (

              <Link
  href={item.href}
  scroll={true}
                key={item.title}
                className="card-box hover-lift soft-shadow overflow-hidden block bg-white"
              >

                <div className="overflow-hidden h-72 md:h-80">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover image-hover"
                  />

                </div>

                <div className="card-padding">

                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-white border-t border-gray-200 py-10 text-center">

        <p className="text-gray-500 text-sm">
          © 2026 SaMa Concept Store. All rights reserved.
        </p>

      </footer>

    </main>
  )
}