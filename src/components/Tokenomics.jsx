import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Crowdfunding', value: 250000000, color: '#0052FF' },
    { name: 'DEX LPs Allocation (ETH,BASE,BSC,SOL)', value: 250000000, color: '#0040CC' },
    { name: 'Ecosystem Developer Incentive', value: 150000000, color: '#3395ff' },
    { name: 'Partnership Allocation', value: 100000000, color: '#66adff' },
    { name: 'UBI Protocol Allocation', value: 250000000, color: '#99c5ff' },
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

const PriceInfo = () => {
    return (
        <div className="bg-ubBlack text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ubBlue/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h3 className="text-ubLightGray text-sm font-bold uppercase tracking-wider mb-4">Current Stage Price</h3>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
                <div>
                    <div className="text-5xl font-black text-white mb-2">$0.02</div>
                </div>
                <div className="text-right md:text-left">
                    <p className="text-xl font-medium text-blue-200">
                        Next Stage Price will be updated to $0.03 on February 20.
                    </p>
                </div>
            </div>
        </div>
    );
};

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 10}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 10}
                outerRadius={outerRadius + 15}
                fill={fill}
            />
        </g>
    );
};

export default function Tokenomics() {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const activeItem = data[activeIndex];

    return (
        <section id="tokenomics" className="py-24 bg-ubOffWhite">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="section-heading">Tokenomics</h2>
                    <div className="inline-block bg-white border border-ubBorder px-6 py-3 rounded-full shadow-sm">
                        <span className="text-ubBlue text-xl font-bold">Total Supply: 1,000,000,000 $UBI</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Chart */}
                    <div className="w-full lg:w-1/2 h-[350px] md:h-[500px] relative flex flex-col justify-center items-center">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                            <div className="text-center max-w-[180px]">
                                <p className="text-sm font-bold text-ubLightGray uppercase tracking-wider mb-1">
                                    {activeItem.name.split(' (')[0]}
                                </p>
                                <p className="text-3xl font-black text-ubBlack">
                                    {((activeItem.value / 1000000000) * 100).toFixed(0)}%
                                </p>
                                <p className="text-xs text-ubGray font-medium mt-1">
                                    {(activeItem.value / 1000000).toLocaleString()}M Tokens
                                </p>
                            </div>
                        </div>

                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={100}
                                    outerRadius={160}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                    onClick={onPieEnter} // Click for mobile
                                    onMouseEnter={onPieEnter} // Hover for desktop
                                    animationBegin={0}
                                    animationDuration={1000}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke={activeIndex === index ? '#fff' : 'none'} strokeWidth={2} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <p className="absolute bottom-4 text-sm text-ubLightGray italic">
                            *Click or hover sections to view details
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <StatBox label="Crowdfunding" value="250M $UBI" />
                            <StatBox label="DEX LPs Allocation" value="250M $UBI" />
                            <StatBox label="Ecosystem Dev Incentive" value="150M $UBI" />
                            <StatBox label="Partnership Allocation" value="100M $UBI" />
                            <StatBox label="UBI Protocol Allocation" value="250M $UBI" />
                        </div>

                        {/* Price Box */}
                        <PriceInfo />
                    </div>

                </div>
            </div>
        </section>
    );
}
