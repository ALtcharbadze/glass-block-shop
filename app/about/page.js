import Link from 'next/link'

export default function About() {

  return (

    <main className="min-h-screen">

      {/* HERO */}

      <section className="page-container section-spacing grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT */}

        <div>

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">

            ჩვენს შესახებ

          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">

            SaMa Concept Store უნიკალური ნივთები

          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            ჩვენ ვმუშაობთ ხელით შექმნილ, შეზღუდული რაოდენობის
            უნიკალურ ნივთებზე. თითოეული ობიექტი არის დროის
            მიღმა მდგომი კონცეფცია, წარსულის ფორმების
            გადაკეთება აწმყოს ესთეტიკაში და ფუნქციაში.

          </p>

          <p className="text-gray-600 text-lg leading-relaxed">

            ჩვენი კომპანია ქმნის თითოეულ ნამუშევარს როგორც
            ხელოვნების ნიმუშს, სადაც ოსტატობა და ელეგანტურობა
            ჰარმონიულად აერთიანებს წარსულსა და თანამედროვეობას.

          </p>

        </div>

        {/* RIGHT */}

        <div className="overflow-hidden rounded-3xl soft-shadow bg-gray-100 h-[320px] md:h-[500px]">

          <img
            src="/logo.jpg"
            alt="SaMa Studio"
            className="w-full h-full object-cover"
          />

        </div>

      </section>

      {/* FOUNDERS */}

      <section className="bg-gray-50 section-spacing">

        <div className="page-container text-center">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">

            The Founders

          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">

            Meet Salome & Mariami

          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">

            SaMa არის ორი ადამიანის ისტორია, რომლებსაც
            აერთიანებთ სილამაზის, დეტალების და ხელნაკეთი
            ხარისხის სიყვარული. ჩვენ გვაინტერესებს უბრალო
            მასალების ახალი ხედვით გამოყენება, მათი
            გადაქცევა ობიექტებად, რომლებიც ყოველდღიურ
            სივრცეს განსხვავებულ მნიშვნელობას ანიჭებს.

          </p>

          {/* CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-3xl mx-auto">

            {/* SALOME */}

            <div className="card-box card-padding text-center soft-shadow hover-lift">

              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">

                <img
                  src="/salome.jpg"
                  alt="Salome"
                  className="w-full h-full object-cover"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">

                სალომე

              </h3>

              <p className="text-gray-500 text-base">

                Co-Founder · SaMa Studio

              </p>

            </div>

            {/* MARIAMI */}

            <div className="card-box card-padding text-center soft-shadow hover-lift">

              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">

                <img
                  src="/mariami.jpg"
                  alt="Mariami"
                  className="w-full h-full object-cover"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">

                მარიამი

              </h3>

              <p className="text-gray-500 text-base">

                Co-Founder · SaMa Studio

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="page-container section-spacing">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14 text-center">

          რაშია ჩვენი ღირებულება

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              icon: '🧱',
              title: 'ხელით შექმნილი ხარისხი',
              desc: 'ჩვენთან თითოეული ნივთი იქმნება ხელით, ყურადღებით, სიზუსტით და იმ ხარისხით, რასაც მასიური წარმოება ვერასდროს მიაღწევს.',
            },

            {
              icon: '✨',
              title: 'სტილი, რომელიც დროს არ ემორჩილება',
              desc: 'ვაერთიანებთ კლასიკურ ესთეტიკას და თანამედროვე დიზაინს, რათა შენი სივრცე იყოს გამორჩეული.',
            },

            {
              icon: '🌿',
              title: 'სიყვარულით შექმნილი',
              desc: 'თითოეულ დეტალში დევს იდეა, ემოცია და ის განსაკუთრებული შტრიხი, რაც სივრცეს ცოცხალს ხდის.',
            },
          ].map((item) => (

            <div
              key={item.title}
              className="card-box card-padding soft-shadow hover-lift"
            >

              <div className="text-5xl mb-5">

                {item.icon}

              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">

                {item.title}

              </h3>

              <p className="text-gray-600 leading-relaxed">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PROCESS */}

      <section className="bg-gray-50 section-spacing">

        <div className="page-container">

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14 text-center">

            როგორ მუშაობს

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {[
              {
                step: '01',
                title: 'აირჩიე ან მოგვწერე',
                desc: 'შეგიძლია შეარჩიო მზა მოდელი ან მოგვწერო შენი იდეა.',
              },

              {
                step: '02',
                title: 'ვქმნით შენთვის',
                desc: 'ვგეგმავთ დიზაინს და ვარჩევთ საუკეთესო მასალებს.',
              },

              {
                step: '03',
                title: 'ვამზადებთ დეტალებით',
                desc: 'თითოეული ნამუშევარი იქმნება ხელით და სიზუსტით.',
              },

              {
                step: '04',
                title: 'მოგაწვდით ყველგან',
                desc: 'დასრულებულ პროდუქტს უსაფრთხოდ ვფუთავთ.',
              },
            ].map((item) => (

              <div
                key={item.step}
                className="text-center"
              >

                <div className="text-5xl font-bold text-blue-300 mb-4">

                  {item.step}

                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">

                  {item.title}

                </h3>

                <p className="text-gray-500 leading-relaxed">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black px-6 py-20 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">

          მზად ხართ შეიძინოთ თქვენი ნივთი?

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">

          გადახედეთ ჩვენს კოლექციას ან დაგვიკავშირდით
          სასურველი დიზაინის შესაქმნელად.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link href="/shop">

            <button className="bg-white text-black px-8 py-4 rounded-2xl uppercase tracking-widest hover:bg-gray-100 smooth-transition">

              Shop Now

            </button>

          </Link>

          <Link href="/contact">

            <button className="border border-white text-white px-8 py-4 rounded-2xl uppercase tracking-widest hover:bg-white hover:text-black smooth-transition">

              Contact Us

            </button>

          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-white py-10 text-center text-sm text-gray-400 border-t border-gray-100">

        © 2026 SaMa Studio. All rights reserved.

      </footer>

    </main>
  )
}