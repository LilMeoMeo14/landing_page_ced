"use client"

import type React from "react"

export default function MobileMenu({
    isOpen,
    onNavClick,
}: {
    isOpen: boolean
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
}) {
    return (
        <div
            className={`
      lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg 
      transition-all duration-300 ease-in-out z-40
      ${isOpen ? "opacity-100 visible max-h-96 overflow-y-auto" : "opacity-0 invisible max-h-0"}
    `}
        >
            <nav className="flex flex-col p-4 space-y-2">
                <a
                    href="#about"
                    onClick={(e) => onNavClick(e, "about")}
                    className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-300"
                >
                    About
                </a>
                <a
                    href="#objectives"
                    onClick={(e) => onNavClick(e, "objectives")}
                    className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-300"
                >
                    Objectives
                </a>
                <a
                    href="#roadmap"
                    onClick={(e) => onNavClick(e, "roadmap")}
                    className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-300"
                >
                    Roadmap
                </a>
                <a
                    href="#training"
                    onClick={(e) => onNavClick(e, "training")}
                    className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-300"
                >
                    Training
                </a>
                <a
                    href="#demo"
                    onClick={(e) => onNavClick(e, "demo")}
                    className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-300"
                >
                    Demo Day
                </a>
                <a
                    href="#cost"
                    onClick={(e) => onNavClick(e, "cost")}
                    className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-300"
                >
                    Cost
                </a>
                <a
                    href="#contact"
                    onClick={(e) => onNavClick(e, "contact")}
                    className="bg-gradient-to-r from-[#010f3f] to-[#0853e8] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md text-base mt-2"
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}
