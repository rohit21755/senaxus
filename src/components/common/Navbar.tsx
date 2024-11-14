"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '@/assets/logo.png'; // Replace with the path to your logo

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    const router = useRouter();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'DGCA Classes', path: '/dgcaclass' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    // Update current path when it changes
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const handleNavigation = (path: any) => {
        setCurrentPath(path);
        setIsOpen(false);
        router.push(path);
    };

    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <Image src={logo} alt="Senaxus Logo" width={120} height={120} />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <button onClick={()=>setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`md:flex items-center space-x-4 md:space-x-8 text-base md:text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
                {navItems.map((item) => (
                    <button key={item.path} onClick={() => handleNavigation(item.path)}>
                        <p
                            className={`block py-2 px-4 rounded 
                                  text-gray-700 hover:bg-gray-100
                            `}
                        >
                            {item.name}
                        </p>
                    </button>
                ))}
            </div>
        </nav>
    );
}
