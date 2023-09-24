import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { Link as ReactRouterLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import { useEffect, useState } from 'react'

const menuLinks = [
  {
    name: "projects",
    link: "/projects",
    label: "Projects",
    logo: null
  },
  {
    name: "source",
    link: "https://github.com/lycheesodaa/portfolio-project",
    label: "Source",
    logo: <IoLogoGithub />
  },
]

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f0e7db55', '#20202380')}
      css={scrollPosition > 0 ? { backdropFilter: 'blur(20px)' } : {}}
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
            <ReactRouterLink to={"/"}>
              Wei Soon Cheong
            </ReactRouterLink>
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
              <Link as={ReactRouterLink} to={link.link} p={1}>
                <Flex align={"center"}>
                  {link.label}
                  <Box pl={2}>
                    {link.logo}
                  </Box>
                </Flex>
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
                      <Box pl={2}>
                        {link.logo}
                      </Box>
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