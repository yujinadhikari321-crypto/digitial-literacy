import Link from "next/link";

const page = () => {
    return (
        <div>
            <main className="flex-grow pt-24">
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Impact</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Creating long-term digital opportunities for students, teachers, and schools.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold mb-6">Why Our Work Matters</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        In Nepal, many government school students complete their education without ever
                        gaining hands-on experience with computers or the internet. This digital gap
                        limits their academic growth, confidence, and future employment opportunities.
                        Digital Bridge directly addresses this issue by providing practical digital access
                        and structured learning.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our impact is not limited to short-term training. By empowering teachers,
                        students, and school administration together, we ensure that digital learning
                        continues sustainably even after our program ends.
                    </p>
                </section>

                <section className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
                        <div className="bg-gray-50 p-10 rounded-xl shadow hover:-translate-y-2 transition">
                            <h3 className="text-5xl font-bold text-blue-600">500+</h3>
                            <p className="mt-4 text-lg">Students gained basic digital literacy</p>
                        </div>
                        <div className="bg-gray-50 p-10 rounded-xl shadow hover:-translate-y-2 transition">
                            <h3 className="text-5xl font-bold text-blue-600">30+</h3>
                            <p className="mt-4 text-lg">Teachers trained in ICT tools</p>
                        </div>
                        <div className="bg-gray-50 p-10 rounded-xl shadow hover:-translate-y-2 transition">
                            <h3 className="text-5xl font-bold text-blue-600">10+</h3>
                            <p className="mt-4 text-lg">Government schools supported</p>
                        </div>
                    </div>
                </section>


                <section className="max-w-6xl mx-auto px-4 py-20">
                    <h2 className="text-3xl font-bold mb-6">Long-Term Impact</h2>
                    <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg">
                        <li>Improved academic confidence and participation among students</li>
                        <li>Teachers independently integrating digital tools into lessons</li>
                        <li>Schools maintaining ICT labs and peer mentor systems</li>
                        <li>Reduced digital inequality between urban and rural students</li>
                    </ul>
                </section>

            </main>

            <footer className="bg-gray-900 text-white text-center py-8">
                &copy; 2025 Digital Bridge
            </footer>
        </div>
    )
}

export default page;