import { Link as ReactRouterLink } from 'react-router-dom'
import { Heading, Box, Image, Link, Badge, Tooltip } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box pt={100}>
    <Link as={ReactRouterLink} to="/projects">
      Projects
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Tooltip label={alt}>
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  </Tooltip>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)