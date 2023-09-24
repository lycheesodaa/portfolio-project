import {
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link,
  Center
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container pt={5}>
      <Heading as="h1" pt="20">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Center my={6}>
        <Link as={ReactRouterLink} to={"/"} p={2}>
          <Button colorScheme='teal'>Back to home</Button>
        </Link>
      </Center>
    </Container>
  )
}

export default NotFound