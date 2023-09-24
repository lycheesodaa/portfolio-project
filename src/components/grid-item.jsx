import { Box, Text, LinkBox, LinkOverlay, Link, Image, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Link
      as={ReactRouterLink}
      to={`/${id}`}
      color={useColorModeValue('black', 'white')}
      _hover={{ textDecoration: "none" }}
    >
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          minH={120}
          maxH={[10000, 230, 120]}
          minW={[0, 450, 230]}
          objectFit={"cover"}
        />
        <LinkOverlay href={`/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)