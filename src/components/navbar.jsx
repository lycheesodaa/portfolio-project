import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { Link as ReactRouterLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'

const menuLinks = [
  {
    name: "home",
    link: "/",
    label: "Home"
  },
  {
    name: "projects",
    link: "/projects",
    label: "Projects"
  },
]

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display='flex'
        py={4}
        maxW='container.md'
        flexWrap={'wrap'}
        alignSelf={'center'}
        justifyItems={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <Heading as="h1" size="md">
            Wei Soon Cheong
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {menuLinks.map((link) => {
            return (
              <Link as={ReactRouterLink} to={link.link} p={2}>
                {link.label}
              </Link>
            )
          })}
        </Stack>

        <Box flex={1} textAlign='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {menuLinks.map((link) => {
                  return (
                    <MenuItem as={ReactRouterLink} to={link.link}>
                      {link.label}
                    </MenuItem>
                  )
                })}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar