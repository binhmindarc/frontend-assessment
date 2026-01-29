import { useNavigate } from 'react-router-dom'
import '../assets/css/Homepage.css'

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage  min-h-screen ">
            <div className="exercises-grid p-4">
                <div className="text-center">
                    <h1 className="heading-underline text-[50px] font-bold relative inline-block group cursor-pointer">
                        Frontend Assessment
                    </h1>
                    <p className='text-gray-400 mt-4'>
                        Welcome to the frontend assessment exercises
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mt-12 justify-center px-5">
                    <div
                        className="exercise-card bg-white rounded-xl p-6 w-full md:w-80 md:h-80 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
                        onClick={() => navigate('/exercise1')}
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 text-2xl font-bold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-7.5 h-7.5 text-[#4a90e2]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                    </svg>
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Exercise 1
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Build a responsive page based on the designs.
                            </p>
                        </div>
                    </div>

                    <div
                        className="exercise-card bg-white rounded-xl p-6 w-full md:w-80 md:h-80 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
                        onClick={() => navigate('/exercise2')}
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 text-2xl font-bold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-7.5 h-7.5 text-[#9b59b6]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                    </svg>
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Exercise 2
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Read the data.json file and display the data as tabs on desktop and an accordion on mobile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage