import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        date: 'Q2 2026',
        title: 'USDC Giveaway Platform',
        desc: 'Launch of our flagship mass-adoption platform targeting 100M users and over $1 Billion in projected annual revenue. The first major milestone that accelerates ecosystem growth and expands USDC rewards for early UBI holders.'
    },
    {
        date: 'Q3 2026',
        title: 'UBI Protocol DeFi Layer',
        desc: 'Deployment of a multi-chain DeFi suite including DEX, PerpDEX and DAO infrastructure, projected to generate 100M+ USDC annually. A scalable financial engine powering long-term, sustainable revenue for the entire ecosystem.'
    },
    {
        date: 'Q4 2026',
        title: 'Social App',
        desc: 'A decentralized social platform built on top of the UBI userbase, unlocking a new, diversified revenue vertical with an estimated 500M USDC annual potential. Designed to merge Web3 incentives with large-scale social engagement.'
    },
    {
        date: '2027+',
        title: 'Expansion',
        desc: 'Launch of three additional high-impact utility platforms, fully funded by the protocol treasury. Strategic expansion focused on amplifying ecosystem value and increasing USDC revenue distribution to UBI holders.'
    }
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="py-24 bg-white relative">
            {/* Background Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-ubBorder"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="section-heading">Roadmap</h2>
                </div>

                <div className="space-y-16">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <span className="text-ubBlue text-xl font-bold bg-ubOffWhite px-4 py-2 rounded-lg border border-ubBorder">{phase.date}</span>
                            </div>

                            {/* Dot */}
                            <div className="w-14 h-14 rounded-full bg-white border-4 border-ubBlue shadow-sm flex items-center justify-center shrink-0 z-10">
                                <div className="w-4 h-4 bg-ubBlue rounded-full"></div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="card-base p-8 relative">
                                    {/* Mobile Date */}
                                    <span className="md:hidden text-ubBlue text-sm font-bold mb-3 block">{phase.date}</span>
                                    <h3 className="text-2xl font-bold text-ubBlack mb-3">{phase.title}</h3>
                                    <p className="text-body">{phase.desc}</p>
                                    {/* Arrow decoration */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-ubBorder transform rotate-45 ${index % 2 === 0 ? '-left-2.5 border-r-0 border-b-0' : '-right-2.5 border-t-0 border-l-0 rotate-[225deg]'}`}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
