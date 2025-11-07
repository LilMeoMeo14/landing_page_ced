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
            </nav>
        </div>
    )
}
