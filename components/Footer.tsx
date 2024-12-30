import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              Student Residence provides comfortable and affordable housing for students. Our mission is to create a supportive living environment that fosters academic success and personal growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div>
              <p className="text-gray-300">Email: info@studentresidence.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Student Residence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
