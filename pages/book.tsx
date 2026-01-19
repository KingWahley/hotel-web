import React, { useState } from 'react'
import {
  Box,
  Grid,
  Heading,
  Text,
  Select,
  Input,
  Button,
  Flex,
} from '@chakra-ui/core'

const rooms = [
  { id: 'deluxe-suite', name: 'Deluxe Suite', price: 250 },
  { id: 'executive-room', name: 'Executive Room', price: 180 },
  { id: 'family-room', name: 'Family Room', price: 220 },
]

const BookingPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  const handleBooking = () => {
    alert(
      `Booking Details:\nRoom: ${selectedRoom}\nGuests: ${guests}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}`
    )
  }

  return (
    <Box px={['1.5em', '1.5em', '3em', '15%']} py="10">
      <Heading as="h2" mb="8" textAlign="center">
        Book Your Room
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr']}
        gap={6}
        maxW="800px"
        marginX="auto"
      >
        {/* Room Selection */}
        <Box>
          <Text mb="2" fontWeight="bold">
            Select Room
          </Text>
          <Select
            placeholder="Choose a room"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            {rooms.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name} - ${room.price}/night
              </option>
            ))}
          </Select>
        </Box>

        {/* Guests */}
        <Box>
          <Text mb="2" fontWeight="bold">
            Guests
          </Text>
          <Select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Guest{i > 0 ? 's' : ''}
              </option>
            ))}
          </Select>
        </Box>

        {/* Check-in */}
        <Box>
          <Text mb="2" fontWeight="bold">
            Check-In
          </Text>
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </Box>

        {/* Check-out */}
        <Box>
          <Text mb="2" fontWeight="bold">
            Check-Out
          </Text>
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </Box>

        {/* Submit Button */}
        <Flex gridColumn={['1 / 2', '1 / 2', '1 / 3']} justify="center" mt="4">
          <Button
            variantColor="orange"
            size="lg"
            onClick={handleBooking}
            isDisabled={!selectedRoom || !checkIn || !checkOut}
          >
            Confirm Booking
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default BookingPage
