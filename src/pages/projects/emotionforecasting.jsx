import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Image,
  OrderedList,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Article from '../../components/layout/article'

const EmotionForecasting = () => (
  <Article title="EmotionForecasting">
    <Container>
      <Title>
        <Container mt={2} padding={0}>
          Forecasting with emotions in time-series foundation models <Badge>Aug-Dec 2025</Badge>
        </Container>
      </Title>

      <P>
        The study aims to investigate the applicability of the recent advent of time-series foundation models in tasks involving forecasting with emotion.
        We investigate this in two dimensions:
      </P>
      
      <OrderedList padding={3}>
        <ListItem>
          Using news sentiment/emotion as covariates to stock forecasting in the Financial News and Stock Price Integration Dataset (FNSPID).
          This is achieved by using a multivariate forecasting approach with either sentiment + stock data or emotion + stock data, and evaluating them against the performance of the model on stock data only.
          {/* <UnorderedList pl={2}>
            <ListItem>
              Results show that on the Moirai model, the use of only stock data is more performant than having sentiment or emotion as covariates.
            </ListItem>
          </UnorderedList> */}
        </ListItem>
        <ListItem>
          Forecasting emotions in a multimodal approach using the Interactive Emotional Dyadic Motion Capture (IEMOCAP) dataset
        </ListItem>
      </OrderedList>

      <P>
        Preliminary results show that time-series foundation models have the ability to forecast more fine-grained dimensions pertaining to emotion, highlighted in the multimodal approach using both video and audio features captured in live conversations.
        Future work on time-series foundation models can further refine their performance in these areas by expanding their training datasets into more technical representations of sentiment and emotion, and explore enriching single-variate predictions with the use of exogenous covariates.
      </P>

      <List margin={4}>
        <ListItem>
          <Meta>Technologies</Meta>
            <span>
              PyTorch, 
              <Link href='https://github.com/SalesforceAIResearch/uni2ts'> Moirai</Link>, 
              <Link href='https://github.com/ibm-granite/granite-tsfm'> TinyTimeMixers</Link>
            </span>
        </ListItem>
        <ListItem>
          <Meta>Datasets</Meta>
            <span>
              <Link href='https://github.com/Zdong104/FNSPID_Financial_News_Dataset'> FNSPID</Link>, 
              <Link href='https://sail.usc.edu/iemocap/'> IEMOCAP</Link>
            </span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/EmotionForecasting/EmotionForecasting_home.PNG" alt="Home" />
      <WorkImage src="/projects/EmotionForecasting/EmotionForecasting_dashboard.PNG" alt="Dashboard" />
      <WorkImage src="/projects/EmotionForecasting/bank1.PNG" alt="Campaigns" /> */}
    </Container>
  </Article>
)

export default EmotionForecasting