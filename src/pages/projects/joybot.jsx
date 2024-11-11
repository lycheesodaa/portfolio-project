import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Image,
  UnorderedList,
  SimpleGrid,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Article from '../../components/layout/article'

const Joybot = () => (
  <Article title="Joybot">
    <Container>
      <Title>
        Joybot <Badge>Aug-Dec 2022</Badge>
      </Title>
      <P>
        Joybot is a natural language processing GODEL-based chatbot aimed at assessing users' mental state in a 
        friendly, lighthearted manner. 
      </P>
      <br />
      <P>
        The model is designed to assess the user's mental state through a statement-depression classifier while
        at the same time maintaining a simple conversation to provide emotional support and guidance. The efficacy
        of the classifier can be strengthened by extending the number of evaluation turns in the model.
      </P>

      <br />
      Datasets used for training/fine-tuning:
      <UnorderedList mx={4} mb={4}>
        <ListItem>
          <Link href="https://www.kaggle.com/datasets/infamouscoder/depression-reddit-cleaned">
            Depression Reddit Dataset <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://counselchat.com/">
            CounselChat Therapy Conversation Data <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <Box pl={4}>
          <ListItem>
            <Link href="https://pypi.org/project/text2emotion/">
              text2emotion <ExternalLinkIcon mx="2px" />
            </Link>
            &nbsp; to label dataset with emotions
          </ListItem>
        </Box>
        <ListItem>
          <Link href="https://www.kaggle.com/datasets/praveengovi/emotions-dataset-for-nlp">
            Emotions dataset for NLP <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Telegram bot</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Jupyter Notebook, Python, python-telegram-bot, NLTK</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/hannahsydney/joybot">
            Joybot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/joybot/conversation.PNG" alt="Convo and Eval" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/projects/joybot/diagnosis.PNG" alt="Diagnosis" />
        <WorkImage src="/projects/joybot/information.PNG" alt="Information" />
      </SimpleGrid>
    </Container>
  </Article>
)

export default Joybot