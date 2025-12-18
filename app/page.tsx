const page = () => {
  return (
    <div>
      <main className="pt-16">
        <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 text-white">
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging the Digital Divide in Nepal's Schools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Empowering the next generation with essential digital skills for higher education and employment
            </p>
            <a href="programs.html"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              See Our Programs
            </a>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Digital Gap</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Government school students in Nepal face a high digital divide due to inadequate devices,
                  limited digital exposure at home, and insufficient ICT training for teachers.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
                  <p className="text-blue-900 font-semibold">
                    Key Statistic: Digital literacy has reached only 39% in Nepal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
              Our Viable and Environmentally Friendly Solution
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  📘
                </div>
                <h3 className="font-bold text-lg mb-2">Internet Learning</h3>
                <p className="text-gray-700 text-sm">
                  Weekly lessons on typing, MS Word, PowerPoint, cybersecurity, coding & AI basics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  🎓
                </div>
                <h3 className="font-bold text-lg mb-2">Teacher Training</h3>
                <p className="text-gray-700 text-sm">
                  Workshops on ICT use, online pedagogy, and digital classNameroom resources.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  🤝
                </div>
                <h3 className="font-bold text-lg mb-2">Peer Mentor System</h3>
                <p className="text-gray-700 text-sm">
                  Selecting student leaders to mentor peers and sustain learning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  💻
                </div>
                <h3 className="font-bold text-lg mb-2">Small Digital Lab</h3>
                <p className="text-gray-700 text-sm">
                  5–7 refurbished devices with offline learning content.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-xl text-slate-300 mb-8">
              Help us reach our goal of 67,000 NPR for refurbished laptops and connectivity.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <p className="text-slate-200">
                Students gain confidence, schools adopt ICT practices, and inequality between
                urban and rural education is reduced.
              </p>
            </div>

            <a href="#"
              className="inline-block bg-red-500 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
              ❤️ Donate Now
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-400 py-10 text-center">
          <p className="mb-2">Presented for SBS 210 – Psychology, Motivation & Decision-Making</p>
          <p className="mb-2">Westcliff University | Professor Karanjit</p>
          <p>&copy; 2025 Digital Bridge</p>
        </footer>

      </main>

    </div>
  )
}

export default page;