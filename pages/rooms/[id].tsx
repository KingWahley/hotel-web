import React from 'react'
import { useRouter } from 'next/router'
import { Box, Image, Heading, Text, Button } from '@chakra-ui/core'
import Link from 'next/link'

const roomData: any = {
  'deluxe-suite': {
    name: 'Deluxe Suite',
    description:
      'Spacious suite with king-size bed, city view, and luxurious amenities.',
    image: '/rooms/deluxe.jpg',
    price: '$250/night',
  },
  'executive-room': {
    name: 'Executive Room',
    description:
      'Modern room with work desk, fast Wi-Fi, and premium comforts.',
    image: '/rooms/executive.jpg',
    price: '$180/night',
  },
  'family-room': {
    name: 'Family Room',
    description:
      'Comfortable room for 4 people with extra space for family.',
    image: '/rooms/family.jpg',
    price: '$220/night',
  },
}

const RoomPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id || !roomData[id as string]) return <Text>Room not found</Text>

  const room = roomData[id as string]

  return (
    <Box px={['1.5em', '1.5em', '3em', '15%']} py="10">
      <Image
        src={room.image}
        alt={room.name}
        width="100%"
        maxHeight="400px"
        objectFit="cover"
        borderRadius="xl"
        mb="6"
      />
      <Heading as="h2" mb="4">
        {room.name}
      </Heading>
      <Text fontSize="lg" mb="4">
        {room.description}
      </Text>
      <Text fontWeight="bold" fontSize="xl" mb="6">
        {room.price}
      </Text>
      <Link href="/rooms" passHref>
        <Button variantColor="orange">Back to Rooms</Button>
      </Link>
    </Box>
  )
}

export default RoomPage
