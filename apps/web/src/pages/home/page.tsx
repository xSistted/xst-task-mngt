import Navbar from "../../components/NavBar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from blue-100 via-cyan-100 to-cyan-200">
                <div className="container mx-auto px-4 py-12">
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
                        <div className="flex justify-evenly mt-16 space-x-8">
                            <div className="bg-gray-200 block max-w-sm p-6 border border-default rounded-4xl shadow-md">
                                <a href="#">
                                    <img className="rounded-base" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Planning</h5>
                                <ul className="mb-6">
                                    <li>Align tasks with project goals</li>
                                    <li>Break down tasks into manageable steps</li>
                                    <li>Set clear priorities and deadlines</li>
                                </ul>
                            </div>
                            <div className="bg-gray-200 block max-w-sm p-6 border border-default rounded-4xl shadow-md">
                                <a href="#">
                                    <img className="rounded-base" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Tracking</h5>
                                <ul className="mb-6">
                                    <li>Track your works, your way</li>
                                    <li>Manage risks and dependencies</li>
                                    <li>Analyze progress and performance</li>
                                </ul>
                            </div>
                            <div className="bg-gray-200 block max-w-sm p-6 border border-default rounded-4xl shadow-md">
                                <a href="#">
                                    <img className="rounded-base" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Collaborate</h5>
                                <ul className="mb-6">
                                    <li>Automate workflows and notifications</li>
                                    <li>Facilitate real-time communication</li>
                                    <li>Share files and resources securely</li>
                                </ul>
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