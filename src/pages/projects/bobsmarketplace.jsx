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

const Bobsmarketplace = () => (
  <Article title="Bob's Marketplace">
    <Container>
      <Title>
        Bob's Marketplace <Badge>Jan-Apr 2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/projects/bobs/bobs_marketplace.png" alt="icon" maxH={100}/>
      </Center>
      <P>
      Bob’s Marketplace aims to equip local construction firms with a reliable supply chain and 
      competitive material costs through an online material commodities marketplace. It also provides
      multiple financing options through the propietary financing algorithm for firms to pay for the 
      materials in a flexible manner.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javscript, React.js, Java, Spring Boot</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Pyrolf/bobs_marketplace_frontend">
            Frontend <ExternalLinkIcon mx="2px" />
          </Link>
          &nbsp;• &nbsp;
          <Link href="https://github.com/pangjunrong/Bobs-Marketplace">
            Backend <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/projects/bobs/bobs_home.png" alt="Home" />
      <WorkImage src="/projects/bobs/bobs_marketplace_buyer.png" alt="Buyer registration" />
      <WorkImage src="/projects/bobs/bobs_marketplace_dashboard.png" alt="Dashboard" />
    </Container>
  </Article>
)

export default Bobsmarketplace