import { Container, Heading, SimpleGrid, Divider, Box, useColorModeValue, Center } from '@chakra-ui/react'
import Article from '../components/layout/article'
import { Section, ProjectSection } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHydrohomies from '/projects/hydrohomies/hydrohomies_home.png?url'
import thumbAscent from '/projects/ascent/Ascent_home.PNG?url'
import thumbJoybot from '/projects/joybot/conversation.PNG?url'
import thumbBobs from '/projects/bobs/bobs_home.png?url'
import thumbDA from '/projects/dialogueact/model_archi.png?url'
import thumbScream from '/projects/scream/end.png?url'
import thumbPlaceholder from '/projects/placeholder.png?url'
import thumbPlaceholderLight from '/projects/placeholder_light.png?url'

const Projects = () => (
  <Article title="Projects">
    <Container>
      <Section>
        <Heading as="h3" fontSize={20} mt={20}>
          Research Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6} mb={10}>
        <ProjectSection delay={0.1}>
          <WorkGridItem
            id="selfdisclosure"
            thumbnail={useColorModeValue(thumbPlaceholderLight, thumbPlaceholder)}
            title="Online Self-Disclosure"
          >
            Psychology research investigating the mediation effects between online self-disclosure and social anxiety.
          </WorkGridItem>
        </ProjectSection>
        
        <ProjectSection delay={0.1}>
          <WorkGridItem
            id="emotionforecasting"
            thumbnail={useColorModeValue(thumbPlaceholderLight, thumbPlaceholder)}
            title="Emotion Forecasting"
          >
            Investigating the performance of emotional forecasting with time-series foundation models.
          </WorkGridItem>
        </ProjectSection>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6} mb={10}>
        <ProjectSection delay={0.1}>
          <WorkGridItem
            id="dialogueact"
            thumbnail={thumbDA}
            title="Dialogue Act Analysis"
          >
            A research project focused on the computational analysis of patterns in dementia conversations.
          </WorkGridItem>
        </ProjectSection>
      </SimpleGrid>

      <Section>
        <Heading as="h3" fontSize={20} mt={20}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6} mb={20}>
        <ProjectSection delay={0.2}>
          <WorkGridItem
            id="hydrohomies"
            title="Hydrohomies"
            thumbnail={thumbHydrohomies}
          >
            A web application providing real-time water usage updates and recommendations to households.
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection delay={0.2}>
          <WorkGridItem
            id="ascent"
            title="Ascent"
            thumbnail={thumbAscent}
          >
            A web solution allowing banks and merchants to process and view millions of transactions with flexible campaign rewards.
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection delay={0.3}>
          <WorkGridItem
            id="bobsmarketplace"
            title="Bob's Marketplace"
            thumbnail={thumbBobs}
          >
            A material commodities marketplace targeting local construction firms with reliable, cost-competitive material goods.
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection delay={0.3}>
          <WorkGridItem
            id="joybot"
            thumbnail={thumbJoybot}
            title="Joybot"
          >
            A natural language processing GODEL-based chatbot aimed at assessing users' mental state in a friendly, lighthearted manner.
          </WorkGridItem>
        </ProjectSection>

        <ProjectSection delay={0.4}>
          <WorkGridItem
            id="screamnwin"
            thumbnail={thumbScream}
            title="Scream & Win"
          >
            A static site built for Patron's Day 2024 Roadshow.
          </WorkGridItem>
        </ProjectSection>
      </SimpleGrid>


      {/* <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Designs & Photography
        </Heading>
        <Center fontSize={15} fontFamily={'mono'} mt={10}>
          Coming soon...
        </Center>
      </Section> */}
    </Container>
  </Article>
)

export default Projects