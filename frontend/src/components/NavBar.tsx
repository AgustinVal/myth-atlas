"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <nav
            className="fixed top-0 left-0 w-full h-16 bg-[#1b1b2f] text-[#ffd700] flex items-center px-8 z-[1000] border-b border-[#2a2a45]"
        >
            {/* Left side - Project name / logo */}
            <div className="flex-1 text-xl font-bold tracking-wide">
                Mythology Atlas
            </div>
            
            {/* Right side - Navigation */}
            <div className="flex gap-6 text-sm font-medium">
                <Link
                    href="/"
                className="hover:text-white transition-colors"
                >
                    Home
                </Link>
            </div>
        </nav>
    )
}