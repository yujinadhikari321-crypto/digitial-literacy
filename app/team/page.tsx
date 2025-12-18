const page = () => {
    return (
        <div>
            <main className="flex-grow pt-24">
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        The people responsible for planning, execution, and long-term vision of Digital Bridge.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto px-4 py-16">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Digital Bridge is built through collaboration. Each member contributes unique skills
                        across coordination, research, curriculum development, and implementation to ensure
                        the initiative remains impactful and sustainable.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto px-4 pb-24 space-y-10">

                    <div className="bg-white border-l-4 border-blue-600 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Yujin</h3>
                                <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
                                    Project Lead & Web Developer
                                </p>
                            </div>
                            <span className="bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full">
                                Leadership & Coordination
                            </span>
                        </div>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Lead Coordinator responsible for managing school collaboration, overseeing communication,
                            and ensuring alignment between program goals and implementation.
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-green-600 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Evan</h3>
                                <p className="text-sm uppercase tracking-wide text-green-600 font-semibold">
                                    Research & Content Development
                                </p>
                            </div>
                            <span className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full">
                                Technical Execution
                            </span>
                        </div>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Technical Lead responsible for building curriculum content, setting up digital devices,
                            and guiding students through foundational digital skills.
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-purple-600 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Prashant</h3>
                                <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold">
                                    Program Design & Curriculum Planning
                                </p>
                            </div>
                            <span className="bg-purple-100 text-purple-700 text-sm px-4 py-1 rounded-full">
                                Monitoring & Impact
                            </span>
                        </div>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Program and Research Lead responsible for teacher training, monitoring learning outcomes,
                            and analyzing data to evaluate project effectiveness.
                        </p>
                    </div>

                </section>

                <section className="bg-blue-50 py-20 text-center">
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        By combining leadership, technical execution, and research-driven evaluation,
                        the Digital Bridge team works toward reducing inequality in access to digital education.
                    </p>
                </section>

            </main>

            <footer className="bg-gray-900 text-white text-center py-8">
                &copy; 2025 Digital Bridge
            </footer>
        </div>
    )
}

export default page;