import Navbar from "../../components/NavBar";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-br from blue-100 via-cyan-100 to-cyan-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center space-y-8">
                        {/* Main Title */}
                        <div className="relative">
                            <h1 className="text-8xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent py-2">
                                XST : Task Management
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-4xl text-blue-400 font-bold">
                            Manage tasks with your teamate!
                        </p>
                    {/* 3 Card Section */}
                    <div className="flex justify-evenly">
                        <div>
                            <h3>Option 1</h3>
                        </div>
                        <div>
                            <h3>Option 2</h3>
                        </div>
                        <div>
                            <h3>Option 3</h3>
                        </div>
                    </div>
                    </div>
                    {/* Get Start Button */}
                    <div className="text-center mt-12">
                        <span className="relative cursor-pointer">
                            <button>
                                <a href="">
                                    Get Start!!!    
                                </a>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;