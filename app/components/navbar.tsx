import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white shadow fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto h-16 px-4 flex justify-between items-center">
                <a href="index.html" className="text-2xl font-bold">
                    <span className="text-blue-600">Digital</span><span className="text-gray-800">Bridge</span>
                </a>
                <div className="hidden md:flex space-x-8">
                    <Link href="/">Home</Link>
                    <Link href="/programs">Programs</Link>
                    <Link href="/impact">Impact</Link>
                    <Link href="/budget">Budget</Link>
                    <Link href="/team">Team</Link>
                    <Link href="/assessment">Assessment</Link>
                    <Link href="/student">Student</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;