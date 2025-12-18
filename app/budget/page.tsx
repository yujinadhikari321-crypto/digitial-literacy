const page = () => {
    return (
        <div>
            <header className="pt-32 pb-20 bg-gradient-to-r from-blue-700 to-slate-900 text-white text-center">
                <h1 className="text-4xl font-bold">Budget & Donation Transparency</h1>
                <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
                    Donors deserve clarity. Every contribution is tracked, purposeful,
                    and directly connected to student learning.
                </p>
            </header>

            <main className="flex-grow max-w-6xl mx-auto px-4 py-20 space-y-20">

                <section>
                    <h2 className="text-3xl font-bold mb-6">📦 What Your Donation Supports</h2>

                    <ul className="space-y-4 text-gray-700">
                        <li><strong>💻 Refurbished Laptops:</strong> Affordable, functional devices allowing shared access for students.
                        </li>
                        <li><strong>📶 Internet Connectivity:</strong> Enables research, email practice, and online tools.</li>
                        <li><strong>📚 Learning Resources:</strong> Offline videos, curriculum guides, and practice materials.</li>
                        <li><strong>🔧 Maintenance & Accessories:</strong> Chargers, repairs, protection, and sustainability.</li>
                    </ul>
                </section>

                <section className="bg-blue-50 p-10 rounded-xl border-l-4 border-blue-600">
                    <h3 className="text-2xl font-bold mb-4">🔍 Our Transparency Commitment</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Digital Bridge operates with full transparency. No funds are used for personal salaries,
                        luxury equipment, or hidden costs. Donors are welcome to request usage reports
                        and see how each contribution impacts real classNamerooms.
                    </p>
                </section>

                <section className="text-center">
                    <p className="text-gray-700 mb-6">
                        Even small contributions help reduce educational inequality
                        and give students tools they otherwise may never access.
                    </p>

                    <button className="bg-red-500 text-white px-10 py-4 rounded-lg font-semibold">
                        Donate (Demo – Khalti / eSewa)
                    </button>
                </section>

            </main>

            <footer className="bg-gray-900 text-white text-center py-10">
                © 2025 Digital Bridge
            </footer>
        </div>
    )
}

export default page;