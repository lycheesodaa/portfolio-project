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
  useBreakpointValue,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioPosition } from '../components/bio'
import Article from '../components/layout/article'
import { Section } from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaOrcid } from 'react-icons/fa'
import { Link as ReactRouterLink } from 'react-router-dom'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'onClick'].includes(prop)
})

const Home = () => {

  const [isMobile] = useMediaQuery('(max-width: 760px)');

  const containerWidth = useBreakpointValue({
    base: '90%',     // 0-480px
    sm: '70%',      // 480px+
    md: '70%',      // 768px+
    lg: '60%',     // 1024px+
    xl: '40%',     // 1280px+
    '2xl': '40%'   // 1536px+
  });

  return (
    <Article>
      <Container maxW={containerWidth}>
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
            <p>📍 Singapore</p>
            <p>🏫 National University of Singapore</p>
            <p>📫 <a href="mailto:weisoon@comp.nus.edu.sg"><i>weisoon@comp.nus.edu.sg</i></a></p>
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
                src="/profile_2025.jpg"
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
          Hi! 👋 I'm Wei Soon, a first-year Computer Science PhD student from the National University of Singapore (NUS).
          I'm currently in the <Link href="https://www.comp.nus.edu.sg/ubicomp/">NUS UbiComp Lab</Link>, under the supervision of Prof. Brian Lim.
          My research interests lie in the intersection of time-series analysis, healthcare and explainable AI.

          <br />
          <br />
          When I'm not doing research, you can find me practising
          <Link href="https://www.instagram.com/p/C9gbSHBPsM8/?igsh=MWt5M2dkam5vNGZkcA==">🥋</Link>Kendo
          at <Link href="https://www.seishinkansg.com/home">Seishinkan SG</Link>.
          I also love travelling while photographing new people and places.
          Feel free to visit the <Link as={ReactRouterLink} to="/gallery">gallery</Link> page for a glimpse of my hobby.
          {/* <Box align="center" my={4}>
            <Link as={ReactRouterLink} to="/projects" p={2}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My projects
              </Button>
            </Link>
          </Box> */}
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2025 - Present</BioYear>
            <Box>
              <b>National University of Singapore</b>
              <BioPosition>PhD in Computer Science</BioPosition>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2024 - Present</BioYear>
            <Box>
              <b>A*STAR Institute for Infocomm Research</b>
              <BioPosition>Research Assistant</BioPosition>
            </Box>
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2025</BioYear>
            <Box>
              <b>Singapore Management University</b>
              <BioPosition>BSc in Computer Science</BioPosition>
            </Box>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Awards & Certifications
          </Heading>
          <BioSection>
            <BioYear>2025 - Present</BioYear>
            NUS Research Scholarship
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2025</BioYear>
            SCIS Aspirations Scholarship
          </BioSection>
        </Section>

        {/* 
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          🥋 Sports - Running, Kendo, Fencing <br />
          📸 Photography, Travelling <br />
          🤖 Programming and AI <br />
          🧠 Psychology
        </Section> */}

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
          <List display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
            <ListItem>
              <Link href="https://orcid.org/0009-0001-2179-3455" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaOrcid />}
                >
                  ORCID
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/lycheesodaa/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  Github
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
                  LinkedIn
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
                  Instagram
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* <Box align="center" my={4}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              <a href="https://drive.google.com/file/d/1oDPNi7TqqPZS4So9ocv5-3ZhbjJETBR3/view?usp=sharing">View/Download Resume</a>
            </Button>
          </Box> */}
        </Section>
      </Container>
    </Article>
  )
}

export default Home
