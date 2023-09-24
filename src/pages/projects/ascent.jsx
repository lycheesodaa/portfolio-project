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

const Ascent = () => (
  <Article title="Ascent">
    <Container>
      <Title>
        Ascent <Badge>Aug-Dec 2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/projects/ascent/ascent.gif" alt="icon" />
      </Center>
      <P>
        With heightened expectations from digital natives today, it has become more important than ever for businesses
        to utilise loyalty programs to increase customer retention.
      </P>
      <br />
      <P>
        Ascent is a transaction processing system that can handle millions of transactions with specific spending rules
        for various card types, accruing cashback, miles or points for each spend. The web application allows banks and
        merchants to flexibly launch and manage campaigns, and end-users can also view their own spending and rewards
        for various card options.
      </P>
      <br />
      <P>
        The project makes heavy use of Amazon Web Services' tremendous suite of tools, employing loosely-coupled architectural
        strategies alongside common software design patterns and principles to further boost the speed and availability of 
        the system as a whole.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, React.js, Amazon Web Services</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <span>Private repository</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/ascent/Ascent_home.PNG" alt="Home" />
      <WorkImage src="/projects/ascent/Ascent_dashboard.PNG" alt="Dashboard" />
      <WorkImage src="/projects/ascent/bank1.PNG" alt="Advice" />
    </Container>
  </Article>
)

export default Ascent