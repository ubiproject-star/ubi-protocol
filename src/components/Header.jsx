import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ubiLogo from '../assets/ubi_symbol.jpg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-ubBorder">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-3">
                        <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
                            <img src={ubiLogo} alt="UBI Logo" className="h-10 w-10 rounded-full border border-ubBorder" />
                            <span className="text-2xl font-black tracking-tighter text-ubBlue">
                                UBI PROTOCOL
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link to="/" onClick={scrollToTop} className="text-ubBlack font-bold hover:text-ubBlue transition-colors">Home</Link>
                            <a href="#about" className="text-ubBlack font-bold hover:text-ubBlue transition-colors">About</a>
                            <a href="#tokenomics" className="text-ubBlack font-bold hover:text-ubBlue transition-colors">Tokenomics</a>
                            <a href="#roadmap" className="text-ubBlack font-bold hover:text-ubBlue transition-colors">Roadmap</a>
                            <a href="#presale" className="text-ubBlack font-bold hover:text-ubBlue transition-colors">Crowdfunding</a>
                            <a href="#faq" className="text-ubBlack font-bold hover:text-ubBlue transition-colors">FAQ</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-ubBlack hover:text-ubBlue focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-ubBorder">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={() => { scrollToTop(); setIsOpen(false); }} className="block px-3 py-2 rounded-md text-base font-bold text-ubBlack hover:text-ubBlue hover:bg-ubOffWhite">Home</Link>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-bold text-ubBlack hover:text-ubBlue hover:bg-ubOffWhite">About</a>
                        <a href="#tokenomics" className="block px-3 py-2 rounded-md text-base font-bold text-ubBlack hover:text-ubBlue hover:bg-ubOffWhite">Tokenomics</a>
                        <a href="#roadmap" className="block px-3 py-2 rounded-md text-base font-bold text-ubBlack hover:text-ubBlue hover:bg-ubOffWhite">Roadmap</a>
                        <a href="#presale" className="block px-3 py-2 rounded-md text-base font-bold text-ubBlack hover:text-ubBlue hover:bg-ubOffWhite">Crowdfunding</a>
                        <a href="#faq" className="block px-3 py-2 rounded-md text-base font-bold text-ubBlack hover:text-ubBlue hover:bg-ubOffWhite">FAQ</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
