import React from 'react'
import { Flex, Box, Button, Stack, Link as ChakraLink } from '@chakra-ui/core'
import NextLink from 'next/link'
// import Logo from './logo'

interface MenuItem {
  link: string
}

const MenuItems: React.FC<MenuItem> = ({ children, link }) => (
  <NextLink href={link} passHref>
    <ChakraLink
      mt={[4, 4, 0, 0]}
      mr="36px"
      display="block"
      fontWeight="medium"
      fontSize="md"
    >
      {children}
    </ChakraLink>
  </NextLink>
)

const Nav = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex="999"
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      paddingY="1.5em"
      bg="rgba(255,255,255,.8)"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      <Flex align="center" mr={5}>
        {/* <Logo /> */}
      </Flex>

      {/* Mobile Menu Toggle */}
      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      {/* Menu Items */}
      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex',
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
        textAlign="center"
        alignItems="center"
      >
        <MenuItems link="/">Home</MenuItems>
        <MenuItems link="/rooms">Our Rooms</MenuItems>
        <MenuItems link="/restaurant">Restaurant</MenuItems>
        <MenuItems link="/gym">Our Gym</MenuItems>
        <MenuItems link="/book">Book A Room</MenuItems>
      </Box>
    </Flex>
  )
}

export default Nav
