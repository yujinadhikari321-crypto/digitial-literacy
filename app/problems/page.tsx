const page = () => {
    return (
        <div>
            <div className="md:hidden flex items-center">
                <button id="mobile-toggle" className="p-2">
                    <svg id="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                    <svg id="close-icon" className="hidden" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <main className="pt-16 min-h-screen">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold mb-6">Understanding the Problem</h1>

                    <p className="text-lg text-gray-700 mb-6">
                        Government school students in Nepal face a deep digital divide due to:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Limited or outdated devices</li>
                        <li>Low digital exposure at home</li>
                        <li>Poor ICT training among teachers</li>
                        <li>Weak digital infrastructure</li>
                        <li>Lack of organized digital literacy curriculum</li>
                    </ul>

                    <p className="text-gray-700 mb-6">
                        As a result, thousands of students complete school without basic skills like typing, using MS Word/PowerPoint,
                        safe internet browsing, or accessing online learning platforms.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
                        <p className="text-blue-900 font-semibold">Key Statistic Highlight: Digital literacy has reached only 39% of schools
                            in Nepal.</p>
                    </div>

                    <a href="index.html"
                        className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">Back to
                        Home</a>
                </section>


                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4"><span className="text-blue-400">Digital</span> Bridge</h3>
                                <p className="text-gray-400 mb-4">Bridging the digital divide in Nepal's government schools through sustainable
                                    education programs.</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-gray-400 hover:text-white" href="index.html">Home</a></li>
                                    <li><a className="text-gray-400 hover:text-white" href="programs.html">Our Programs</a></li>
                                    <li><a className="text-gray-400 hover:text-white" href="impact.html">Impact</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold mb-4">Contact Information</h4>
                                <div className="space-y-3 text-gray-400">
                                    <p>iwriteto@digitalbridge.org</p>
                                    <p>📍 Location: Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p className="mb-2">Presented for SBS 210 - Psychology, Motivation, & Decision-Making</p>
                            <p className="mb-2">Westcliff University | Professor Karanjit</p>
                            <p>&copy; 2025 Digital Bridge. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>

        </div >
    )
}

export default page;