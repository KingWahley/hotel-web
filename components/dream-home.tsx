import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { FaConciergeBell, FaWifi, FaUtensils } from 'react-icons/fa'

const DreamHome: React.FC = () => {
  return (
    <Box
      width="100%"
      minHeight="60vh"
      style={{
        backgroundImage: "url('')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', 
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pt="10"
      pb="20"
    >
      <Heading
        as="h3"
        mb="10"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        color="black"
      >
        This Is Your Home Away From Home
      </Heading>

      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        {/* 24-Hour Room Service */}
        <Flex alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <FaConciergeBell size={50} color="#F6A623" style={{ marginRight: '18px' }} />
          <Flex flexDirection="column">
            <Text fontWeight="bold" fontSize="lg" color="black">
              24-Hour Room Service
            </Text>
            <Text fontSize="sm" maxWidth="250px" color="blackAlpha.900">
              Enjoy freshly prepared meals and in-room dining at any hour,
              delivered straight to your comfort.
            </Text>
          </Flex>
        </Flex>

        {/* High-Speed Wi-Fi */}
        <Flex alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <FaWifi size={40} color="#F6A623" style={{ marginRight: '18px' }} />
          <Flex flexDirection="column">
            <Text fontWeight="bold" fontSize="lg" color="black">
              High-Speed Wi-Fi
            </Text>
            <Text fontSize="sm" maxWidth="250px" color="blackAlpha.900">
              Stay connected with fast, reliable internet throughout the hotel,
              whether for work or leisure.
            </Text>
          </Flex>
        </Flex>

        {/* Restaurant & Bar */}
        <Flex alignItems="center" maxW="380px" mb={['8', '8', '8', '0', '0']}>
          <FaUtensils size={40} color="#F6A623" style={{ marginRight: '18px' }} />
          <Flex flexDirection="column">
            <Text fontWeight="bold" fontSize="lg" color="black">
              Restaurant & Bar
            </Text>
            <Text fontSize="sm" maxWidth="250px" color="blackAlpha.900">
              Indulge in fine dining and handcrafted drinks at our elegant
              on-site restaurant and bar.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default DreamHome
