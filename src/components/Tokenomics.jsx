import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Crowdfunding', value: 250000000, color: '#0052FF' }, // ubBlue
    { name: 'Liquidity Pool', value: 250000000, color: '#0040CC' }, // Darker Blue
    { name: 'Ecosystem Incentives', value: 150000000, color: '#3395ff' }, // Lighter Blue
    { name: 'Marketing Allocation', value: 100000000, color: '#66adff' }, // Lighter
    { name: 'Staking & Lending Allocation', value: 250000000, color: '#99c5ff' }, // Lightest
];

const StatBox = ({ label, value }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="card-base p-6 relative overflow-hidden h-full flex flex-col justify-center"
    >
        <div className="absolute top-0 right-0 w-24 h-24 bg-ubOffWhite rounded-full -mr-10 -mt-10"></div>
        <p className="text-ubLightGray text-sm font-bold uppercase tracking-wider mb-2 relative z-10">{label}</p>
        <p className="text-2xl md:text-3xl font-black text-ubBlack relative z-10">{value}</p>
    </motion.div>
);

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="py-24 bg-ubOffWhite">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="section-heading">Tokenomics</h2>
                    <div className="inline-block bg-white border border-ubBorder px-6 py-3 rounded-full shadow-sm">
                        <span className="text-ubBlue text-xl font-bold">Total Supply: 1,000,000,000 $UBI</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Chart */}
                    <div className="w-full lg:w-1/2 h-[500px] bg-white rounded-3xl border border-ubBorder shadow-sm p-4 flex flex-col justify-center items-center">
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={100}
                                    outerRadius={160}
                                    paddingAngle={5}
                                    dataKey="value"
                                    cornerRadius={8}
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                                    itemStyle={{ color: '#050A19', fontWeight: 'bold' }}
                                    formatter={(value) => [`${(value / 1000000).toLocaleString()}M`, 'Tokens']}
                                />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '20px', fontWeight: '600', color: '#334155' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Stats Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <StatBox label="Crowdfunding" value="250M $UBI" />
                            <StatBox label="Liquidity Pool Allocation" value="250M $UBI" />
                            <StatBox label="Ecosystem Dev" value="150M $UBI" />
                            <StatBox label="Marketing Allocation" value="100M $UBI" />
                            <StatBox label="Staking & Lending Allocation" value="250M $UBI" />
                            <StatBox label="Price" value="$0.02" />
                        </div>

                        <div className="bg-ubBlack text-white p-8 rounded-2xl shadow-lg space-y-4">
                            <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                <span className="text-gray-400 font-medium">Liquidity Lock</span>
                                <span className="font-bold text-xl">Jan 1, 2030</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-medium">Networks</span>
                                <div className="flex gap-2">
                                    {['BASE', 'ETH', 'BSC', 'SOL'].map(net => (
                                        <span key={net} className="bg-ubBlue text-white px-2 py-1 rounded text-sm font-bold">{net}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
