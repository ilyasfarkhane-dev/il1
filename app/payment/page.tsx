'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { rooms } from '../../data/rooms'
import Image from 'next/image'

// Define a type for room structure
type Room = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function Payment() {
  const searchParams = useSearchParams()
  const [room, setRoom] = useState<Room | null>(null) 
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  })

  useEffect(() => {
    const roomId = searchParams.get('roomId')
    if (roomId) {
      const selectedRoom = rooms.find(r => r.id === parseInt(roomId))
      setRoom(selectedRoom || null) // Ensure it is either a valid room or null
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Processing payment:', paymentInfo)
    alert('Payment processed successfully!')
  }

  // Handle loading state when room is not found
  if (!room) {
    return <Layout><div className="container mx-auto px-4 py-8">Loading...</div></Layout>
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Reservation</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
              <CardDescription>Room Details</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={room.image} alt={room.name} width={500} height={500} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="mb-2">{room.description}</p>
              <p className="font-bold text-lg">${room.price}/month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Enter your payment details to complete the reservation</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={paymentInfo.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="name">Name on Card</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={paymentInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-600">Complete Payment</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
