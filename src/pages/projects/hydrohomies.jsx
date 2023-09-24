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

const Hydrohomies = () => (
  <Article title="hydrohomies">
    <Container>
      <Title>
        hydrohomies <Badge>Aug-Dec 2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/projects/hydrohomies/hydrohomies-logo.png" alt="icon" />
      </Center>
      <P>
        In the status quo, water security has always been a huge issue for Singapore,
        with the current daily demand for water standing at about 430 million gallons a day.
      </P>
      <br/>
      <P>
        This project finds a cheaper, alternative, generally applicable solution to reduce household water consumption.
        It consists of an iOT system using image recognition to detect water meter readings, a real-time dashboard 
        showing water consumption statistics, and a recommendation system providing up-to-date suggestions based on 
        previous water consumption data.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Vue.js, Python, Flask, Arduino, Tensorflow, GCP</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/jolenelo/hydrohomies">
            hydrohomies <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/hydrohomies/hydrohomies_home.png" alt="Home" />
      <WorkImage src="/projects/hydrohomies/hydrohomies_dash.png" alt="Dashboard" />
      <WorkImage src="/projects/hydrohomies/hydrohomies_advice.png" alt="Advice" />
    </Container>
  </Article>
)

export default Hydrohomies