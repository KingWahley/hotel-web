import React from 'react'
import { Grid, Box, Image, Heading, Text, Flex } from '@chakra-ui/core'
import Link from 'next/link'

interface Room {
  id: string
  name: string
  description: string
  image: string
  price: string
}

const rooms: Room[] = [
  {
    id: 'deluxe-suite',
    name: 'Deluxe Suite',
    description: 'Spacious suite with a king-size bed and city view.',
    image: '/rooms/deluxe.jpg',
    price: '$250/night',
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    description: 'Modern room with work desk and luxurious amenities.',
    image: '/rooms/executive.jpg',
    price: '$180/night',
  },
  {
    id: 'family-room',
    name: 'Family Room',
    description: 'Comfortable room for 4 with extra space for family.',
    image: '/rooms/family.jpg',
    price: '$220/night',
  },
]

const RoomsPage: React.FC = () => {
  return (
    <Box px={['1.5em', '1.5em', '3em', '15%']} py="10">
      <Heading as="h2" textAlign="center" mb="10">
        Our Rooms
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']}
        gap={8}
      >
        {rooms.map((room) => (
          <Link key={room.id} href={`/rooms/${room.id}`} passHref>
            <Box
              cursor="pointer"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              // _hover={{ transform: 'scale(1.03)', transition: '0.3s' }}
            >
              <Image
                src={room.image}
                alt={room.name}
                height="220px"
                width="100%"
                objectFit="cover"
              />
              <Flex
                flexDirection="column"
                bg="white"
                p="4"
                justify="space-between"
              >
                <Heading as="h3" fontSize="xl" mb="2">
                  {room.name}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb="2">
                  {room.description}
                </Text>
                <Text fontWeight="bold">{room.price}</Text>
              </Flex>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  )
}

export default RoomsPage
