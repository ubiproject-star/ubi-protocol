import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import PresaleWidget from '../components/PresaleWidget';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Header />
            <Hero />
            <About />
            <Tokenomics />
            <Roadmap />
            <PresaleWidget />
            <Footer />
        </div>
    );
}
