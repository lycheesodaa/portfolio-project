import { Container, Heading, SimpleGrid, Divider, Box, useColorModeValue } from '@chakra-ui/react'
import Article from '../components/layout/article'
import { ProjectSection } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHydrohomies from '/projects/hydrohomies/hydrohomies_home.png?url'

const Projects = () => (
  <Article title="Projects">
    <Container>
      <Box
        borderRadius="lg"
        p={2}
        mb={6}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Heading as="h1" fontSize={25} >
          - Projects -
        </Heading>
      </Box>


      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <ProjectSection>
          <WorkGridItem id="hydrohomies" title="Hydrohomies" thumbnail={thumbHydrohomies}>
            A web application providing real-time water usage updates and recommendations to households.
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection>
          <WorkGridItem
            id="Adulting101"
            title="Adulting101"
            thumbnail={thumbHydrohomies}
          >
            A CRUD based Django webapp, with a Markdown to HTML Converter and an integrated AI chat bot.
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection delay={0.1}>
          <WorkGridItem
            id="fakeface"
            title="Fake Face Classifier"
            thumbnail={thumbHydrohomies}
          >
            A Machine Learning model using CNN to classify fake images generted using Generative Adversarial NetProjects (GANs).
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection delay={0.1}>
          <WorkGridItem id="handgesture" thumbnail={thumbHydrohomies} title="Hand Gesture Recognition">
            A machine learning Model that will Recognize Hand Gestures in real time using CNN and automated using Raspberry pi.
          </WorkGridItem>
        </ProjectSection>
      </SimpleGrid>
    </Container>
  </Article>
)

export default Projects