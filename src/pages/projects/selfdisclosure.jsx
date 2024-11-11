import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Article from '../../components/layout/article'

const SelfDisclosure = () => (
  <Article title="SelfDisclosure">
    <Container>
      <Title>
        <Container mt={2} padding={0}>
        The Mediating Effect of Psychological Need Satisfaction  on Self-Disclosure and Social Anxiety on Social Media:
        A Structural Equation Modeling Approach <Badge>Aug-Dec 2025</Badge>
        </Container>
      </Title>

      <P>
      This study explored the mediating effect of basic psychological need satisfaction on the association between self-disclosure and social anxiety in social media environments, particularly Instagram.
      Using structural equation modeling, we analyzed data from 310 undergraduate Instagram users.
      </P>
      <P>
      For each of the five dimensions of self-disclosure — intent, valence, honesty, amount, and depth — only intentional, positively valenced, and honest self-disclosure was significantly linked to decreased social anxiety on social media through enhanced psychological need satisfaction.
      These findings suggest that qualitative and authentic aspects of self-disclosure, rather than the quantity or depth play a crucial role in reducing social anxiety on social media.
      This study contributes to a nuanced understanding of how self-disclosure practices positively impact mental health in online environments.
      </P>

      <List mx={4} my={4}>
        <ListItem>
          <Meta>Keywords</Meta>
          <span><i>Self-disclosure, Social Anxiety, Basic Psychological Need Satisfaction, Instagram, Structural Equation Modeling</i></span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/selfdisclosure/mediation_graph_condensed.png" alt="SEM Mediation Results" />
      <WorkImage src="/projects/selfdisclosure/power_analysis_plot.png" alt="Power Analysis Results" />
    </Container>
  </Article>
)

export default SelfDisclosure