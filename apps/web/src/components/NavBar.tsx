function Navbar() {
    return (
        <nav className="sticky top-0 bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <div className="text-black text-xl font-bold">NavBar Icon</div>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="text-black hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;