import React from 'react'
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

const Service: React.FC = () => {
  return (
    <Box position="relative"       display={['grid', 'grid', 'none', 'none', 'none']}
>
      
      <Grid
        backgroundColor="orange.500"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            you are in good hands
          </Heading>
         
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            With years of experience in hospitality, we know what it takes to make every stay special. From personalized service to carefully crafted amenities, you can relax knowing you’re in good hands. Whether you’re here for business or leisure, our team is dedicated to making your experience unforgettable.
          </Text>
          <Button
            alignSelf="flex-start"
            variantColor="white"
            backgroundColor="#fff"
            color="orange.500"
            width="fit-content"
          >
            Book Your Room
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service
