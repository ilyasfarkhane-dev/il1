'use client'

import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter, useSearchParams } from 'next/navigation'
import { rooms } from '../../data/rooms'

export default function Rooms() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get('id')

  useEffect(() => {
    if (roomId) {
      const room = rooms.find(r => r.id === parseInt(roomId))
      if (room) {
        setSelectedRoom(room)
      }
    }
  }, [roomId])

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const handleReserve = (room) => {
    router.push(`/payment?roomId=${room.id}`)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Available Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <Image src={room.image}  width={500}
      height={500} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${room.price}/month</span>
                  <div>
                    <Button onClick={() => setSelectedRoom(room)} className="mr-2">View Details</Button>
                    <Button onClick={() => handleReserve(room)}>Reserve</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedRoom?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Image src={selectedRoom?.image} alt={selectedRoom?.name}  width={500}
      height={500} className="w-full h-48 object-cover rounded-md" />
            <p>{selectedRoom?.description}</p>
            <p className="font-bold">${selectedRoom?.price}/month</p>
          </div>
          <DialogFooter>
            <Button onClick={() => handleReserve(selectedRoom)}>Reserve Now</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  )
}

