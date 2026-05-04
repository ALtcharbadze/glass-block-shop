import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer">SaMa Studio</h1>
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
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">ჩვენს შესახებ</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            ჩვენ ვაცოცხლებთ კლასიკურ სილამაზეს თანამედროვე სივრცეებში
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            SaMa Studio მარადიული დიზაინისადმი გატაცებით დაიბადა. ჩვენ გადავწყვიტეთ, 
            რომ ძველი სტილის ავეჯი გაგვეცოცხლებინა და ვინტაჟური და დეკორატიული სახით
            სახლებში, კაფეებსა და ბარებში შეგვეტანა და თანამედროვე ცხოვრებაში კლასიკა შემოგვეტანა.
            
          </p>
          <p className="text-gray-500 text-lg">
            ჩვენი კომპანია ქმნის თითოეულ ნამუშევარს როგორც ხელოვნების ნიმუშს, სადაც ოსტატობა და ელეგანტურობა 
            ჰარმონიულად აერთიანებს წარსულსა და თანამედროვეობას.
          </p>
        </div>
        <div className="bg-gray-100 h-96 rounded-sm flex items-center justify-center text-gray-400 text-sm">
          <img
          src="/StudioPhoto.jpg"
          alt="Studio Photo"
          className="w-full h-full object-cover"
        />
        </div>
      </section>

      {/* Founders */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">The Founders</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Salome & Mariami</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            SaMa არის ორი ადამიანის ისტორია, რომლებსაც აერთიანებთ სილამაზის, დეტალების და ხელნაკეთი ხარისხის სიყვარული. 
            სალომე და მარიამი ერთად გარდაქმნიან შუშის ბლოკებს ავეჯად, რომელიც ადამიანებს უყვარდებათ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4">
      <img
    src="/salome.jpg"
    alt="Salome"
    className="w-full h-full object-cover rounded-full"
  />
</div>
              <h4 className="text-lg font-bold text-gray-900">სალომე</h4>
              <p className="text-gray-500 text-sm mt-2">Co-Founder · SaMa Studio</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4">
  <img
    src="/mariami.jpg"
    alt="Mariami"
    className="w-full h-full object-cover rounded-full"
  />
</div>
              <h4 className="text-lg font-bold text-gray-900">მარიამი</h4>
              <p className="text-gray-500 text-sm mt-2">Co-Founder · SaMa Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">რაშია ჩვენი ღირებულება</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🧱',
              title: 'ხელით შექმნილი ხარისხი',
              desc: 'ჩვენთან თითოეული ნივთი იქმნება ხელით, ყურადღებით, სიზუსტით და იმ ხარისხით, რასაც მასიური წარმოება ვერასდროს მიაღწევს. აქ არ არის შაბლონები, მხოლოდ ნამდვილი ოსტატობა.'
            },
            {
              icon: '✨',
              title: 'სტილი, რომელიც დროს არ ემორჩილება',
              desc: 'ვაერთიანებთ კლასიკურ ესთეტიკას და თანამედროვე დიზაინს, რათა შენი სივრცე: სახლი, კაფე თუ კომერციული ინტერიერი იყოს გამორჩეული.'
            },
            {
              icon: '🌿',
              title: 'სიყვარულით შექმნილი',
              desc: 'ჩვენთვის ავეჯი უბრალოდ ნივთი არ არის. თითოეულ დეტალში დევს იდეა, ემოცია და ის განსაკუთრებული შტრიხი, რაც სივრცეს ცოცხალს ხდის.'
            }
          ].map(item => (
            <div key={item.title} className="bg-gray-50 p-8 rounded-sm">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">როგორ მუშაობს</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'აირჩიე ან მოგვწერე', desc: 'შეგიძლია შეარჩიო მზა მოდელი ან მოგვწერო შენი იდეა და ჩვენ დაგეხმარებით მის სრულყოფაში.' },
              { step: '02', title: 'ვქმნით შენთვის', desc: 'ვგეგმავთ დიზაინს და ვარჩევთ საუკეთესო მასალებს, რათა შედეგი ზუსტად შენს მოლოდინს შეესაბამებოდეს.' },
              { step: '03', title: 'ვამზადებთ დეტალებით', desc: 'თითოეული ნამუშევარი იქმნება ხელით, სიზუსტით, გამოცდილებით და დეტალებზე მაქსიმალური ორიენტირებით.' },
              { step: '04', title: 'მოგაწვდით ყველგან', desc: 'დასრულებულ პროდუქტს უსაფრთხოდ ვფუთავთ და პირდაპირ შენთან მოვიტანთ.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{item.step}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">მზად ხართ შეიძინოთ თქვენი ნივთი?</h3>
        <p className="text-gray-400 mb-8">გადახედეთ ჩვენს კოლექცისა ან დაგვიკავშირდით და შეარჩიეთ თქვენთვის სასურველი დიზაინი</p>
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
        © 2025 SaMa Studio · Tbilisi, Georgia · All rights reserved.
      </footer>
    </main>
  )
}