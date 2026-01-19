import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/core'
import Button from './button'

const Header: React.FC = () => {
  return (
    <Grid
      backgroundImage="url(/header-bg.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="60vh"
      alignItems="flex-end"
    >
      <Flex
        flexDirection="column"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
        paddingBottom="3rem"
      >
        <Heading
          as="h2"
          fontSize={['2xl', '2xl', '4xl', '3xl', '5xl']}
          color="white"
          bg="orange.500"
          mb="3"
          width="fit-content"
          px={['4px', '12px', '16px']}
          py={['4px', '8px', '12px']}
        >
          Welcome To Our Hotel
        </Heading>

        <Heading
          as="h3"
          fontSize={['lg', 'lg', '2xl']}
          textTransform="uppercase"
          color="orange.500"
          bg="white"
          width="fit-content"
          px={['24px', '30px']}
          py={['8px', '14px']}
          mb="4"
        >
          Experience Luxury At It&apos;s Finest
        </Heading>

        <Button>Book Your Stay</Button>
      </Flex>
    </Grid>
  )
}

export default Header
