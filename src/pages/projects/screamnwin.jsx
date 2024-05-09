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

const ScreamNWin = () => (
  <Article title="Scream & Win">
    <Container>
      <Title>
      Scream & Win <Badge>Jan 2024</Badge>
      </Title>
      <Center mx={20}>
        <Image src="/projects/scream/SMUPD24logo_Yellow.png" alt="icon" maxWidth={200}/>
      </Center>
      <P>
        Scream & Win is a simple side project involving a static website for Patron's Day 2024 Roadshow, where 
        participants have to scream into the microphone for 5 seconds to win a prize.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML and Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/lycheesodaa/pd24-scream-n-win">
            Scream & Win <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pd24-scream-n-win.vercel.app/">
            Hosted on Vercel <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/scream/base.png" />
      <WorkImage src="/projects/scream/end.png" />
    </Container>
  </Article>
)

export default ScreamNWin