import React from 'react'
import { Box, Flex, Heading, Text, Grid, Image, Button } from '@chakra-ui/core'
import { FaDumbbell, FaRunning, FaHeart } from 'react-icons/fa'

const facilities = [
  {
    icon: FaDumbbell,
    title: 'Weight Training',
    description: 'State-of-the-art free weights and machines to build strength.',
  },
  {
    icon: FaRunning,
    title: 'Cardio Zone',
    description: 'Treadmills, bikes, and ellipticals for all fitness levels.',
  },
  {
    icon: FaHeart,
    title: 'Wellness Area',
    description: 'Stretch, meditate, and relax with our wellness facilities.',
  },
]

const GymPage: React.FC = () => {
  return (
    <Box px={['1.5em', '1.5em', '3em', '15%']} py="10">
      {/* Hero Section */}
      <Box
        bgImage="url('/gym/gym-hero.jpg')"
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
          Our Gym & Wellness Center
        </Heading>
      </Box>

      {/* Facilities */}
      <Heading as="h3" fontSize="3xl" mb="6" textAlign="center">
        Facilities
      </Heading>

      <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={6}>
        {facilities.map((facility, i) => {
          const Icon = facility.icon
          return (
            <Flex
              key={i}
              direction="column"
              align="center"
              bg="gray.50"
              p="6"
              borderRadius="md"
              boxShadow="md"
              textAlign="center"
            >
              <Box
                p="4"
                bg="orange.500"
                borderRadius="full"
                color="white"
                mb="4"
              >
                <Icon size={40} />
              </Box>
              <Heading as="h4" fontSize="xl" mb="2">
                {facility.title}
              </Heading>
              <Text fontSize="sm">{facility.description}</Text>
            </Flex>
          )
        })}
      </Grid>

      {/* Call-to-Action */}
      <Flex justify="center" mt="10">
        <Button variantColor="orange" size="lg">
          Book a Trainer
        </Button>
      </Flex>
    </Box>
  )
}

export default GymPage
