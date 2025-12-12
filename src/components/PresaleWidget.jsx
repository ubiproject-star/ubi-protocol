import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Loader, Zap } from 'lucide-react';

const TOTAL_SALE_SUPPLY = 250000000;
const TOKEN_PRICE = 0.02;

export default function PresaleWidget() {
    const [amount, setAmount] = useState('');
    const [tokensSold, setTokensSold] = useState(12400000);
    const [isLoading, setIsLoading] = useState(false);

    // Live effect simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setTokensSold(prev => prev + Math.floor(Math.random() * 500));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleAmountChange = (e) => {
        const val = e.target.value;
        if (!isNaN(val) && Number(val) >= 0) {
            setAmount(val);
        }
    };

    const totalCost = (Number(amount) * TOKEN_PRICE).toFixed(2);
    const remaining = TOTAL_SALE_SUPPLY - tokensSold;
    const progress = (tokensSold / TOTAL_SALE_SUPPLY) * 100;

    const handleBuy = async () => {
        if (!amount || Number(amount) <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        setIsLoading(true);
        const price = (Number(amount) * TOKEN_PRICE).toFixed(2);

        try {
            const response = await fetch('https://api.commerce.coinbase.com/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CC-Api-Key': 'c7c8399b-92f6-469d-8639-3acfcf302381',
                    'X-CC-Version': '2018-03-22'
                },
                body: JSON.stringify({
                    name: 'UBI Token Crowdfunding',
                    description: `Purchase of ${amount} $UBI Tokens`,
                    pricing_type: 'fixed_price',
                    local_price: {
                        amount: price,
                        currency: 'USD'
                    },
                    metadata: {
                        customer_id: 'web_visitor',
                        // Wallet address removed as per user request
                    }
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                console.error("Coinbase API Error:", errData);
                throw new Error("Payment creation failed. Please try again.");
            }

            const data = await response.json();
            window.open(data.data.hosted_url, '_blank');
            setTokensSold(prev => prev + Number(amount));
            setAmount('');

        } catch (error) {
            console.error(error);
            alert("Error: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="presale" className="py-24 bg-ubBlue relative min-h-[100dvh] flex items-center overflow-hidden scroll-mt-24">
            {/* Gradient Background - Strict Blue */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-ubBlue to-ubDarkBlue">
                {/* Subtle particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white opacity-5"
                        style={{
                            width: Math.random() * 80 + 20,
                            height: Math.random() * 80 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center gap-12">

                {/* Text Content - High Contrast White */}
                <div className="w-full md:w-1/2 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="font-bold text-white tracking-wider">CROWDFUNDING IS LIVE</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white drop-shadow-sm">
                            Get your first UBI !
                        </h2>
                        <p className="text-xl text-white mb-8 font-medium leading-relaxed opacity-90">
                            Get $UBI at a favorable price before listings begin and benefit from future USDC earnings now !
                        </p>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                            <p className="text-sm text-white mb-2 font-bold uppercase tracking-wider opacity-80">Tokens Remaining</p>
                            <div className="text-4xl md:text-5xl font-black font-mono tracking-widest text-white mb-4">
                                {remaining.toLocaleString()}
                            </div>
                            <div className="w-full bg-black/20 h-4 rounded-full overflow-hidden border border-white/10">
                                <motion.div
                                    className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex justify-between text-sm mt-3 text-white font-bold">
                                <span>{progress.toFixed(4)}% Sold</span>
                                <span>{TOTAL_SALE_SUPPLY.toLocaleString()} Total</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Card - Pure White Background */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden ring-1 ring-black/5"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-ubBlue"></div>

                        <h3 className="text-2xl font-black text-ubBlack mb-6 flex items-center gap-2">
                            <Zap className="fill-ubBlue text-ubBlue" /> Buy $UBI Instantly with Multiple Crypto Options
                        </h3>

                        <div className="space-y-6">

                            <div>
                                <label className="block text-sm font-bold text-ubBlack mb-2 uppercase tracking-wide">Amount ($UBI)</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={handleAmountChange}
                                    placeholder="5000"
                                    className="w-full bg-white border-2 border-ubBorder rounded-xl py-4 px-4 text-ubBlack focus:outline-none focus:border-ubBlue focus:ring-4 focus:ring-blue-50 text-2xl font-bold transition-all placeholder:text-gray-300"
                                />
                            </div>

                            <div className="flex justify-between items-center py-4 border-t border-ubBorder">
                                <span className="text-ubGray font-bold text-lg">1 UBI = $0.02</span>
                                <span className="text-3xl md:text-4xl font-black text-ubBlue">${totalCost}</span>
                            </div>

                            <button
                                onClick={handleBuy}
                                disabled={isLoading}
                                className="w-full py-5 bg-ubBlue hover:bg-ubDarkBlue text-white rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {isLoading ? <Loader className="animate-spin" /> : <Wallet />}
                                {isLoading ? 'Processing...' : 'BUY $UBI'}
                            </button>

                            <div className="flex justify-center gap-4">
                                <span className="text-gray-400 font-bold text-sm">Powered by Coinbase Pay</span>
                            </div>

                            <div className="mt-6 pt-6 border-t border-ubBorder/50 text-center">
                                <p className="text-ubBlack font-bold text-sm mb-3 text-opacity-80">
                                    To ensure a smooth $UBI transfer process, contact us via WhatsApp or Telegram after payment.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <a href="https://wa.me/13436328093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-[#20bd5a] transition-colors">
                                        WhatsApp
                                    </a>
                                    <a href="https://t.me/PatrickUBI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#24A1DE] text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-[#1c8dbf] transition-colors">
                                        Telegram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
