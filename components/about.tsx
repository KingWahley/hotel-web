import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      mb="24"
      mt="10"
      alignItems="center"
      gap={6}
      display={['none', 'none', 'none', 'grid', 'grid']}
    >
      <Flex
        flexDirection="column"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
        textAlign={['center', 'center', 'center', 'left', 'left']}
        px={['4', '8', '8', '0', '0']}
        mx="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize={['3xl', '4xl', '4xl', '5xl', '5xl']}
          fontWeight="normal"
          mb="6"
        >
          About Us
        </Heading>

        <Text
          fontSize={['sm', 'md', 'md', 'md', 'md']}
          mb="6"
          maxWidth={['100%', '100%', '100%', '450px', '450px']}
        >
        You are in good hands. With years of experience in hospitality, we know what it takes to make every stay special. From personalized service to carefully crafted amenities, you can relax knowing you’re in good hands. Whether you’re here for business or leisure, our team is dedicated to making your experience unforgettable.
        </Text>

        <Button>Book Room</Button>
      </Flex>

      <Box
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 7', '4 / 7']}
        display={['none', 'none', 'none', 'block', 'block']}
        overflow="hidden" // ensures the border-radius clips the image
      >
        <Image
          src="/about-us-bg.webp"
          width="100%"
          height="100%"
          objectFit="cover"
          borderTopLeftRadius="50px"
          borderBottomLeftRadius="50px"
        />
      </Box>
    </Grid>
  )
}

export default About
