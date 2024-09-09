// src/components/Header.tsx
"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-600">
            Renewable Energy
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
