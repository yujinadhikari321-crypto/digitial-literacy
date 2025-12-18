import Image from "next/image";
import tra from "../assets/teacher.png"
import broke from "../assets/student.png"
import andrew from "../assets/administration.png"

const page = () => {
    return (
        <div>
            <header className="pt-32 pb-20 bg-gradient-to-r from-blue-700 to-slate-900 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Programs & Learning Curriculum</h1>
                <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto">
                    Digital Bridge combines physical classroom teaching with online guidance,
                    allowing students and teachers to learn, revise, and prepare even outside sessions.
                </p>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-24 space-y-32">

                {/* ================= STUDENTS ================= */}

                <section className="max-w-7xl mx-auto px-4 py-20">

                    {/* TITLE */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900">Student Learning Curriculum</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            A structured 2-month digital learning journey for students from Class 5 to Class 10,
                            delivered physically in schools and reinforced through this website.
                        </p>
                    </div>

                    {/* IMAGE + INTRO */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <Image alt="" src={broke} width={600} height={600}
                            className="rounded-xl shadow-lg" />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">How Students Learn</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Students attend guided physical classes in school computer labs.
                                This website supports learning by providing structured weekly plans,
                                clear outcomes, and revision guidance for students and parents.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Students are divided into two age-appropriate tracks to ensure effective learning.
                            </p>
                            {/* STUDENT REGISTRATION CTA */}
                            <div className="mt-8">
                                <a href="" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold
                     hover:bg-blue-700 transition">
                                    Register as a Student
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FOUNDATION TRACK */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-blue-700 mb-4">Foundation Track (Class 5–7)</h3>
                        <p className="text-gray-700 mb-6 max-w-4xl">
                            This track focuses on building confidence with computers, typing,
                            and safe internet usage through visual and hands-on learning.
                        </p>

                        {/* HIDDEN CONTENT */}
                        <div id="foundationPlan" className="mt-10 space-y-10">

                            {/* WEEK BLOCK */}
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 1–2: Computer Awareness</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Understanding computer parts (CPU, mouse, keyboard)</li>
                                    <li>Safe startup and shutdown procedures</li>
                                    <li>Using mouse and keyboard confidently</li>
                                    <li>Basic digital safety rules</li>
                                </ul>
                                <p className="mt-2 text-sm text-gray-600">
                                    Outcome: Students feel comfortable using a computer independently.
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 3–4: Typing & Documents</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Typing posture and speed practice</li>
                                    <li>Writing homework in MS Word</li>
                                    <li>Text formatting and saving files</li>
                                </ul>
                                <p className="mt-2 text-sm text-gray-600">
                                    Outcome: Students can submit typed school assignments.
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 5–6: Internet & Email</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Using the internet for learning</li>
                                    <li>Email basics and communication</li>
                                    <li>Cyber safety & online behavior</li>
                                </ul>
                                <p className="mt-2 text-sm text-gray-600">
                                    Outcome: Students use the internet safely and responsibly.
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 7–8: Creativity & Presentation</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Creating PowerPoint slides</li>
                                    <li>Adding images and titles</li>
                                    <li>Speaking and presenting confidently</li>
                                </ul>
                                <p className="mt-2 text-sm text-gray-600">
                                    Outcome: Students present ideas using technology.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ADVANCED TRACK */}
                    <div>
                        <h3 className="text-3xl font-bold text-green-700 mb-4">Advanced Track (Class 8–10)</h3>
                        <p className="text-gray-700 mb-6 max-w-4xl">
                            This track prepares students for higher education, digital responsibility,
                            and future technology careers through applied learning.
                        </p>


                        <div id="advancedPlan" className=" mt-10 space-y-10">

                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 1–2: Digital Productivity</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Advanced typing & formatting</li>
                                    <li>Professional document creation</li>
                                    <li>File organization skills</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 3–4: Research & Ethics</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Online research techniques</li>
                                    <li>Email etiquette</li>
                                    <li>Cyber ethics and privacy</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 5–6: Presentation & Collaboration</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Storytelling with slides</li>
                                    <li>Group collaboration</li>
                                    <li>Visual data representation</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-xl font-bold">Weeks 7–8: Coding & AI Awareness</h4>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                                    <li>Logical thinking exercises</li>
                                    <li>Introduction to programming concepts</li>
                                    <li>Understanding AI and technology careers</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </section>



                {/* ================= TEACHERS ================= */}
                <section className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-4">👩‍🏫 For Teachers</h2>
                        <p className="text-gray-700 text-lg mb-6">
                            Teachers are empowered to integrate technology confidently into daily
                            teaching through guided training and practical tools.
                        </p>

                        <div className="bg-gray-50 border rounded-lg p-6 space-y-6">

                            <h3 className="text-xl font-semibold">Teacher Training Curriculum</h3>

                            <div>
                                <h4 className="font-semibold">Phase 1 · Digital Teaching Basics</h4>
                                <p className="text-gray-600 text-sm">
                                    Using computers, projectors, and digital content effectively in class.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Phase 2 · Online & Blended Learning</h4>
                                <p className="text-gray-600 text-sm">
                                    Google Classroom, online assignments, and student engagement tools.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Phase 3 · Classroom ICT Integration</h4>
                                <p className="text-gray-600 text-sm">
                                    Lesson planning with technology and managing digital classrooms.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Phase 4 · Sustainability & Mentorship</h4>
                                <p className="text-gray-600 text-sm">
                                    Maintaining ICT practices and mentoring students long-term.
                                </p>
                            </div>

                            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                                Teacher Registration
                            </button>
                        </div>
                    </div>

                    <Image alt="" width={600} height={600} src={tra}
                        className="rounded-xl shadow-lg object-cover w-full h-[420px]" />
                </section>

                {/* ================= ADMINISTRATION ================= */}
                <section className="grid md:grid-cols-2 gap-12 items-center">

                    <Image alt="" src={andrew} width={600} height={600}
                        className="rounded-xl shadow-lg object-cover w-full h-[420px]" />

                    <div>
                        <h2 className="text-4xl font-bold mb-4">🏫 For School Administration</h2>
                        <p className="text-gray-700 text-lg mb-6">
                            School leadership is guided to build sustainable digital systems that
                            continue long after the program ends.
                        </p>

                        <div className="bg-gray-50 border rounded-lg p-6 space-y-6">

                            <h3 className="text-xl font-semibold">Administrative Digital Plan</h3>

                            <div>
                                <h4 className="font-semibold">Infrastructure Planning</h4>
                                <p className="text-gray-600 text-sm">
                                    Setting up small digital labs, device allocation, and scheduling.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Device & Resource Management</h4>
                                <p className="text-gray-600 text-sm">
                                    Maintenance, inventory tracking, and safe device usage policies.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Policy & Cyber Safety</h4>
                                <p className="text-gray-600 text-sm">
                                    Student protection, responsible usage rules, and digital ethics.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Long-Term Sustainability</h4>
                                <p className="text-gray-600 text-sm">
                                    Budget planning, partnerships, and program continuation strategies.
                                </p>
                            </div>

                            <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black transition">
                                Administration Partnership
                            </button>
                        </div>
                    </div>
                </section>

            </main>


            <footer className="bg-gray-900 text-white text-center py-10">
                © 2025 Digital Bridge
            </footer>
        </div>
    )
}

export default page;