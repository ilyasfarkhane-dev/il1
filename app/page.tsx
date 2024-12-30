

import Link from 'next/link'
import Layout from '../components/Layout'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
  return (
    <Layout>
     <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
      Welcome to <span className="text-yellow-400">Student Residence</span>
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
      Your home away from home. Experience comfortable living and a supportive community designed for students.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link 
        href="/rooms" 
        className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Explore Rooms
      </Link>
      <Link 
        href="/contact" 
        className="bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Contact Us
      </Link>
    </div>
  </div>
</div>



<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
      Why Choose <span className="text-yellow-400">Us?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 mb-6 bg-gray-100 rounded-full">
          <svg className="h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.8 0-6.5 2-8 4 1.5 2 4.2 4 8 4s6.5-2 8-4c-1.5-2-4.2-4-8-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v12" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prime Location</h3>
        <p className="text-gray-600 leading-relaxed">
          Conveniently located near campus, shops, and public transportation for ultimate accessibility.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 mb-6 bg-gray-100 rounded-full">
          <svg className="h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v2m-6 0a6 6 0 1112 0v-2m-6 0H9m6 0h-3" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modern Amenities</h3>
        <p className="text-gray-600 leading-relaxed">
          Access high-speed internet, dedicated study areas, and vibrant communal spaces.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 mb-6  bg-gray-100 rounded-full">
          <svg className="h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17v-1a4 4 0 00-8 0v1m6 0H8m8 0h4m0 0v3m0-3a3 3 0 01-6 0m3 0h-2m-1 0H4m0 0v3m0-3a3 3 0 016 0m3 0h-2" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Supportive Community</h3>
        <p className="text-gray-600 leading-relaxed">
          Be part of a vibrant, inclusive community that fosters lifelong connections.
        </p>
      </div>
    </div>
  </div>
</section>

      <FeaturedRooms />
    </Layout>
  )
}

