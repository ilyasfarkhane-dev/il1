'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '../../components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { rooms } from '../../data/rooms'

//const rooms = [
//  {
//    id: 1,
//    name: 'Single Room',
//    description: 'Cozy single room with a comfortable bed and study area.',
//    price: 500,
//    image: '/placeholder.svg?height=300&width=400',
//  },
//  {
//    id: 2,
//    name: 'Double Room',
//    description: 'Spacious double room perfect for sharing with a roommate.',
//    price: 750,
//    image: '/placeholder.svg?height=300&width=400',
//  },
//  {
//    id: 3,
//    name: 'Studio Apartment',
//    description: 'Self-contained studio apartment with kitchenette and private bathroom.',
//    price: 1000,
//    image: '/placeholder.svg?height=300&width=400',
//  },
//]

export default function Payment() {
  const searchParams = useSearchParams()
  const [room, setRoom] = useState(null)
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
      setRoom(selectedRoom)
    }
  }, [searchParams])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPaymentInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically process the payment
    console.log('Processing payment:', paymentInfo)
    // After successful payment, you might want to redirect to a confirmation page
    alert('Payment processed successfully!')
  }

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
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover rounded-md mb-4" />
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
                <Button type="submit" className="w-full">Complete Payment</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

