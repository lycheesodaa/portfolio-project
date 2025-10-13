import { Container, Heading, SimpleGrid, Divider, Box, useColorModeValue, Center } from '@chakra-ui/react'
import Article from '../components/layout/article'
import { Section } from '../components/section'

const Pubs = () => (
    <Article title="Pubs">
        <Container pt={20}>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Publications
                </Heading>
            </Section>
            <Section delay={0.1}>
                TBA
            </Section>
        </Container>
    </Article>
)

export default Pubs