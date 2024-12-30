'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Student Residence</span>
              <Image className="h-12 w-auto"
                src="/logosf.png"
                width={500}
                height={500}
                alt="Logo" />
              
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-base font-medium text-gray-600 hover:text-yellow-400">
              Home
            </Link>
            <Link href="/rooms" className="text-base font-medium text-gray-600 hover:text-yellow-400">
              Rooms
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-600 hover:text-yellow-400">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/login">
              <Button variant="outline" className="hover:bg-yellow-400 hover:text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-100">
            <div className="px-5 pt-4 flex items-center justify-between">
            <Image className="h-12 w-auto"
                src="/logosf.png"
                width={500}
                height={500}
                alt="Logo" />
              <button
                type="button"
                className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 px-5">
              <nav className="grid gap-y-4">
                <Link href="/" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                  Home
                </Link>
                <Link href="/rooms" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                  Rooms
                </Link>
                <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                  Contact
                </Link>
                <Link href="/login" className="text-base font-medium text-gray-700 hover:text-indigo-600">
                  Login
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
