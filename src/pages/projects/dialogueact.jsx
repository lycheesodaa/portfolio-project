import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center,
  Tooltip,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Article from '../../components/layout/article'

const DialogueAct = () => (
  <Article title="Dialogue Act">
    <Container>
      <Title>
        <Container mt={2} padding={0}>
          Dialogue act analysis in conversations with dementia patients <Badge>Jan-Apr 2024</Badge>
        </Container>
      </Title>
      
      <P>
        With the rise of the number of cases of dementia worldwide, the burden on healthcare providers increase as well.
        
        This project aims to alleviate the stressors faced by healthcare providers through a computational analysis of Dialogue Acts <i>-
        a common classification method for conversational utterances -</i> within client-pracitioner conversations. Through the insights 
        brought about by said analysis, we strive to improve the engagement and robustness of existing intelligent conversational agents.
      </P>
      <P>
        Results show that clients with dementia have longer speaking turns and predominantly non-opinion statements in their speeches.
        Practitioners tend to have more varied dialogue purposes, from questioning to acknolwedgement, which can be attributed to the facilitative nature of their roles.
      </P>
      <P>
        We use these analytical insights to fine-tune and prompt-engineer an open source language model, Gemma, to ascertain if dialogue acts can result in more curated conversation flows for dementia clients.
        Preliminary results show that using these dialogue acts as additional context inputs can enrich the resulting responses from the model, demonstrating its potential in future conversation systems.
      </P>

      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem> */}
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Python, PyTorch, HuggingFace, <Link href='https://huggingface.co/google/gemma-2-2b-it'>Gemma</Link></span>
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