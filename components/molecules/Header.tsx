'use client'
import Link from "next/link";
import { useStore } from "../../store/ShoppingCart";

import { ShoppingCartIcon } from "../atoms/ListIconst";


export default function Header() {

  const { count } = useStore()
  
  return (
    <header className="w-full shadow-lg">
        <nav className="max-w-screen-xl mx-auto bg-white">
          <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                <Link href="/">Pets</Link>
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      className="hidden"
                      d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                    />
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <Link
                href="#"
                className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                About
              </Link>
              <Link
                href="/login"
                className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
              >
                Login
              </Link>
              <div className="relative">
                <ShoppingCartIcon 
                  color="black"
                  size={35}
                />
                <span className="absolute top-0 right-0 bg-black-200 rounded-full h-5 w-5 flex justify-center items-center text-white text-[12px]">
                  { count }
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}
