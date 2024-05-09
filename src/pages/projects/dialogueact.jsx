import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center,
  Tooltip
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Article from '../../components/layout/article'

const DialogueAct = () => (
  <Article title="Dialogue Act">
    <Container>
      <Title>
        DialogueAct <Badge>Jan-Apr 2024</Badge>
      </Title>
      {/* <Center my={6}>
        <Image src="/projects/dialogueact/model_archi.gif" alt="icon" />
      </Center> */}
      <P>
        With the rise of the number of cases of dementia worldwide, the burden on healthcare providers increase as well.
      </P>
      <br />
      <P>
        This project aims to alleviate the stressors faced by healthcare providers through a computational analysis of Dialogue Acts <i>-
        a common classification method for conversational utterances -</i> within client-pracitioner conversations. Through the insights 
        brought about by said analysis, we strive to improve the engagement and robustness of existing intelligent conversational agents.
      </P>

      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem> */}
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Python, PyTorch, HuggingFace, Gemma</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Github</Meta>
          <span>Private repository</span>
        </ListItem> */}
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Results</Center>
      </Heading>

      <WorkImage src="/projects/dialogueact/combined_piecharts.png" alt="Dialogue Act Piechart" />
      <WorkImage src="/projects/dialogueact/all_normalised_turn_length_data_speakers.png" alt="Speaker Turn Lengths" />
      <WorkImage src="/projects/dialogueact/model_archi.png" alt="Model Architecture" />
      <WorkImage src="/projects/dialogueact/client-model-ft.png" alt="Model DA Flow Diagram" />
    </Container>
  </Article>
)

export default DialogueAct