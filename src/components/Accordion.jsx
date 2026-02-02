import { useRef, useEffect, useState } from 'react';
import '../assets/css/Exercise2.css';

const Accordion = ({ title, isOpen, onClick, children }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight + 'px');
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && isOpen && contentRef.current) {
                setMaxHeight(contentRef.current.scrollHeight + 'px');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <div className="bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden">
            <button
                onClick={onClick}
                className={`tab-btn flex items-center justify-between w-full p-6 text-left font-medium transition-colors duration-300 ${isOpen ? 'active' : ''}`}
            >
                <span className="text-lg">
                    {title}
                </span>

                <svg
                    className={`w-6 h-6 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`accordion-content transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    maxHeight: isOpen ? maxHeight : '0px',
                }}
            >
                <div ref={contentRef} className="mt-4 px-6 pb-6 leading-relaxed text-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
