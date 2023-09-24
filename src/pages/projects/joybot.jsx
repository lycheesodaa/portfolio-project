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
      <Center my={6}>
        <Image src="/projects/joybot/joybot-logo.png" alt="icon" />
      </Center>
      <P>
        In the status quo, water security has always been a huge issue for Singapore,
        with the current daily demand for water standing at about 430 million gallons a day.
      </P>
      <br />
      <P>
        This project finds a cheaper, alternative, generally applicable solution to reduce household water consumption.
        It consists of an iOT system using image recognition to detect water meter readings, a real-time dashboard
        showing water consumption statistics, and a recommendation system providing up-to-date suggestions based on
        previous water consumption data.
      </P>

      <br />
      Datasets used for training/fine-tuning:
      <UnorderedList ml={4} mb={4}>
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

      <WorkImage src="/projects/joybot/conversation.PNG" alt="Home" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/projects/joybot/diagnosis.PNG" alt="Dashboard" />
        <WorkImage src="/projects/joybot/information.PNG" alt="Advice" />
      </SimpleGrid>
    </Container>
  </Article>
)

export default Joybot