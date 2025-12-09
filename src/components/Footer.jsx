import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import ubiLogo from '../assets/ubi_symbol.jpg';

/* Social Icon SVG components for official branding */
const TwitterXIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const WhatsAppIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-white py-16 text-ubBlack border-t border-ubBorder">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">

                <div className="space-y-4">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <img src={ubiLogo} alt="UBI Logo" className="h-10 w-10 rounded-full border border-ubBorder" />
                        <Link to="/" className="text-2xl font-black text-ubBlue block tracking-tighter">
                            UBI PROTOCOL
                        </Link>
                        <a href="#faq" className="ml-4 px-3 py-1 bg-ubOffWhite hover:bg-ubBlue hover:text-white text-ubBlue font-bold text-sm rounded-lg transition-colors border border-ubBorder">
                            FAQ
                        </a>
                    </div>
                    <p className="text-ubGray text-sm max-w-sm mx-auto md:mx-0 font-medium">
                        Universal Blockchain Income. Sustainable yields for participants.
                        Revenue generating platforms, fully distributed to $UBI holders.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <h4 className="font-bold text-lg mb-6 text-ubBlack bg-gradient-to-r from-ubBlue to-indigo-600 bg-clip-text text-transparent inline-block">Join the Community</h4>
                    <div className="flex gap-4">
                        <a href="https://x.com/ubiProtocol?t=MHQVvuKKeY2fpFpWlbjTrw&s=09" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="w-12 h-12 bg-black border border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                                <TwitterXIcon className="text-white w-5 h-5" />
                            </div>
                        </a>
                        <a href="https://t.me/ubiprotocol" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="w-12 h-12 bg-[#24A1DE] border border-[#24A1DE] rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                                <Send className="text-white w-5 h-5 -ml-0.5 mt-0.5" />
                            </div>
                        </a>
                        <a href="https://farcaster.xyz/ubiprotocol" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="w-12 h-12 bg-[#855DCD] border border-[#855DCD] rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                                {/* Farcaster "F" Icon (Simple SVG) */}
                                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                    <path d="M18.24 2H5.76C3.68 2 2 3.68 2 5.76v12.48C2 20.32 3.68 22 5.76 22h12.48c2.08 0 3.76-1.68 3.76-3.76V5.76C22 3.68 20.32 2 18.24 2zM15.2 16.8h-1.6v-3.2h-3.2v3.2H8.8V7.2h6.4v9.6z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <h4 className="font-bold text-lg mb-6 text-ubBlack">Support Chat</h4>
                    <div className="relative">
                        {/* Live Pulse Animation Behind */}
                        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
                        <a href="https://wa.me/13436328093" target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-3 bg-[#25D366] px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl text-white">
                            <WhatsAppIcon className="w-6 h-6 hover:scale-110" />
                            <span className="font-bold">WhatsApp Support</span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="text-center text-ubLightGray text-xs mt-16 pt-8 border-t border-ubBorder font-medium">
                © {new Date().getFullYear()} Universal Blockchain Income Protocol. All rights reserved.
            </div>
        </footer>
    );
}
