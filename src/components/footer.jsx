import { Box, Divider } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" py={8}>
      <Divider my={6} />
      &copy; {new Date().getFullYear()} Wei Soon Cheong. All Rights Reserved.
    </Box>
  )
}

export default Footer