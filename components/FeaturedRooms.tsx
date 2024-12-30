import Link from 'next/link'
import { rooms } from '../data/rooms'
import { Button } from '@/components/ui/button'

export default function FeaturedRooms() {
  const featuredRooms = rooms.slice(-4) // Get the last 4 rooms

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Featured <span className="text-yellow-400">Rooms</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-center line-clamp-3">
                  {room.description}
                </p>
                <span className="text-xl font-bold  mb-4">
                  ${room.price}/month
                </span>
                <div className="flex justify-center gap-x-4">
                  <Link href={`/rooms?id=${room.id}`}>
                    <Button>View Details</Button>
                  </Link>
                  <Link href={`/payment?roomId=${room.id}`}>
                    <Button>Reserve</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Center the View All Rooms Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/rooms">
            <Button
              size="lg"
              className="px-8 py-4 w-full sm:w-auto flex justify-center bg-yellow-400"
            >
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
