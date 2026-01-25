import { Container, Heading, useBreakpointValue } from '@chakra-ui/react'
import Article from '../components/layout/article'
import { Section } from '../components/section'

const Pubs = () => {
    
  const containerWidth = useBreakpointValue({
    base: '90%',     // 0-480px
    sm: '70%',      // 480px+
    md: '70%',      // 768px+
    lg: '60%',     // 1024px+
    xl: '40%',     // 1280px+
    '2xl': '40%'   // 1536px+
  });

  return (
    <Article title="Pubs">
        <Container pt={20} maxW={containerWidth}>
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
}

export default Pubs