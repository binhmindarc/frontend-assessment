import { useState, useEffect } from 'react'
import { exercise2 } from '../data/data'
import '../assets/css/Exercise2.css'

const Exercise2 = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleTabClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const handleResize = () => {
      setActiveIndex(prev =>
        window.innerWidth >= 768 && prev === null ? 0 : prev
      )
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen py-8 md:py-16 bg-gray-50">
      <div className="max-w-375 mx-auto px-4 md:px-8">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Exercise 2 - Tabs & Accordion
        </h1>

        {exercise2.length > 0 && (
          <div className="mt-4 hidden md:block bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="flex bg-gray-100 border-b border-gray-200">
              {exercise2.map((item, index) => (
                <button
                  key={item.id}
                  className={`tab-btn flex-1 px-6 py-4 font-medium relative cursor-pointer ${activeIndex === index ? 'active' : ''} ${activeIndex !== index ? 'text-gray-600 hover:bg-black hover:text-white' : 'text-black'}`}
                  onClick={() => handleTabClick(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="min-h-50">
              {activeIndex !== null && exercise2[activeIndex] && (
                <div
                  className="p-8 leading-relaxed text-gray-800 animate-[fadeIn_0.3s_ease-in-out]"
                  dangerouslySetInnerHTML={{ __html: exercise2[activeIndex].content }}
                />
              )}
            </div>
          </div>
        )}

        {exercise2.length > 0 && (
          <div className="md:hidden space-y-4">
            {exercise2.map((item, index) => (
              <div key={item.id} className="bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden">
                <button
                  onClick={() => handleAccordionClick(index)}
                  className={`tab-btn flex items-center justify-between w-full p-6 text-left font-medium transition-colors duration-300 ${activeIndex === index ? 'active' : ''}`}
                >
                  <span className="text-lg">
                    {item.title}
                  </span>
                  <svg
                    className={`w-6 h-6 ml-2 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-600 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div
                    className="mt-4 px-6 pb-6 leading-relaxed text-gray-800"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div >
  )
}

export default Exercise2