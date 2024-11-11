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
  Image,
  useMediaQuery,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Article from '../components/layout/article'
import { Section } from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Link as ReactRouterLink } from 'react-router-dom'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'onClick'].includes(prop)
})

const Home = () => {

  const [isMobile] = useMediaQuery('(max-width: 760px)');

  return (
    <Article>
      <Container>
        {isMobile ? <></> : <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Click and scroll to interact!
        </Box>}

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1} mt={isMobile ? 20 : 0}>
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
            Hi! 👋 I'm Wei Soon, a final-year Computer Science student from Singapore Management University,
            majoring in AI and Psychology with a knack for solving analytical problems and learning new skills quickly.
            I am primarily interested in bridging AI and humans to further enhance the effectiveness of current technological
            solutions and optimise their usage.
            <br />
            <br />
            If I'm not coding, you can find me doing Kendo🥋 or Fencing🤺!<br /> I also love travelling
            while photographing new people and places, so if you're thinking the same and need someone spontaneous
            to travel or do a photoshoot with, feel free to contact me through my socials! 😜
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={ReactRouterLink} to="/projects" p={2}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My projects
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
            Born in Singapore 🇸🇬
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from <b>Raffles Institution</b> 🎓
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started Bachelor's @ <b>Singapore Management University</b>
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            President @ <b>SMU Kendo Club</b>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Software Engineer Intern @ <b>CrimsonLogic</b> 👨‍💻
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Mobile Software Engineer Intern @ <b>Thales DIS</b> 👨‍💻
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Research Attachment @ <b>Agency for Science, Technology and Research (A*STAR)</b> 👨‍💻
          </BioSection>

        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Certifications & Awards
          </Heading>
          📜 AWS Certified Solutions Architect - Associate | <b>Nov 2022</b>
          <br />
          📜 Oracle Certified Foundations Associate, Java | <b>Apr 2021</b>
          <br />
          🏆 SCIS Aspirations Scholarship | <b>2020-2024</b>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          🥋 Sports - Running, Kendo, Fencing <br />
          📸 Photography, Travelling <br />
          🤖 Programming and AI <br />
          🧠 Psychology
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
              <a href="https://drive.google.com/file/d/1oDPNi7TqqPZS4So9ocv5-3ZhbjJETBR3/view?usp=sharing">View/Download Resume</a>
            </Button>
          </Box>
        </Section>
      </Container>
    </Article>
  )
}

export default Home
