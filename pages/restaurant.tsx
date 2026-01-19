import React from 'react'
import { Box, Grid, Flex, Heading, Text, Image, Button } from '@chakra-ui/core'

const dishes = [
  {
    name: 'Grilled Salmon',
    description: 'Freshly grilled salmon served with lemon butter sauce.',
    image: '/restaurant/salmon.jpg',
    price: '$25',
  },
  {
    name: 'Steak & Veggies',
    description: 'Juicy steak with a side of seasonal vegetables.',
    image: '/restaurant/steak.jpg',
    price: '$30',
  },
  {
    name: 'Pasta Primavera',
    description: 'Pasta tossed with fresh seasonal vegetables and herbs.',
    image: '/restaurant/pasta.jpg',
    price: '$18',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with molten chocolate center.',
    image: '/restaurant/lava-cake.jpg',
    price: '$10',
  },
]

const RestaurantPage: React.FC = () => {
  return (
    <Box px={['1.5em', '1.5em', '3em', '15%']} py="10">
      {/* Hero Section */}
      <Box
        bgImage="url('/restaurant/restaurant-hero.jpg')"
        bgPos="center"
        bgSize="cover"
        height="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="10"
      >
        <Heading
          as="h2"
          fontSize={['3xl', '4xl', '5xl']}
          color="white"
          bg="rgba(0,0,0,0.6)"
          px="6"
          py="4"
          textAlign="center"
        >
          Our Restaurant
        </Heading>
      </Box>

      {/* Featured Dishes */}
      <Heading as="h3" fontSize="3xl" mb="6" textAlign="center">
        Featured Dishes
      </Heading>

      <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gap={6}>
        {dishes.map((dish, i) => (
          <Box
            key={i}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
          >
            <Image src={dish.image} width="100%" height="200px" objectFit="cover" />
            <Box p="4">
              <Flex justify="space-between" align="center" mb="2">
                <Heading as="h4" fontSize="xl">
                  {dish.name}
                </Heading>
                <Text fontWeight="bold">{dish.price}</Text>
              </Flex>
              <Text fontSize="sm">{dish.description}</Text>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Call-to-Action */}
      <Flex justify="center" mt="10">
        <Button variantColor="orange" size="lg">
          Reserve a Table
        </Button>
      </Flex>
    </Box>
  )
}

export default RestaurantPage
