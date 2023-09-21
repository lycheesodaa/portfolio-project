import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Article from '../components/layout/article'
import { Section } from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Link as ReactRouterLink } from 'react-router-dom'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Article>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Click and scroll to interact!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Wei Soon Cheong
            </Heading>
            <p>BSc (Computer Science) Undergraduate</p>
            <p>🏫 Singapore Management University</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/profile.JPG"
                alt="Profile image"
                borderRadius="full"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Hi! 👋 I'm Wei Soon, a final-year Computer Science student from Singapore Management University.
            I have a passion for technology and Artificial Intelligence, where I'm currently pursuing a track in!
            I aspire to one day be able to develop software that can better the lives of all around me :)
            <br />
            <br />
            If I'm not coding, you can find me doing Kendo🥋 or Fencing🤺!<br /> I also love travelling
            while photographing new people and places, so if you're thinking the same and need someone spontaneous
            to travel or do a photoshoot with, feel free to contact me through my socials! 😜
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={ReactRouterLink} to="/projects" p={2}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Singapore
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started undergraduate studies at SMU
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Took over as President @ <b>SMU Kendo Club</b>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Summer Software Engineer Internship @ <b>CrimsonLogic</b>
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Off-cycle Mobile Software Engineer Internship @ <b>Thales DIS</b>
          </BioSection>

        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          - Sports, Running, Games, Travelling, Photography, AI, Leetcode ♥ -
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Certifications & Achievements
          </Heading>
          <li />
          AWS Certified Solutions Architect - Associate | <b>Nov 2022</b>
          <li />
          Top 5 in CARRO Singapore's Hackathon 2022
          <li />
          Top 12 in NinjaVan Code Dojo 2022
          <li />
          Oracle Certified Foundations Associate, Java | <b>Apr 2021</b>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/lycheesodaa/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @lycheesodaa
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/weisooncheong/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Wei Soon Cheong
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/wei_soon/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @wei_soon
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              <a href="https://drive.google.com/u/0/uc?id=1KuynPsJgXlR33EV-WnUWId0S0ar0alsI&export=download">Download Resume</a>
            </Button>
          </Box>
        </Section>
      </Container>
    </Article>
  )
}

export default Home
