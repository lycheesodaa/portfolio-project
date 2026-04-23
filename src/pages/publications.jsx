import { Container, Heading, useBreakpointValue, UnorderedList, ListItem, Link } from '@chakra-ui/react'
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
                <Heading as="h3" variant="section-title">
                    Publications
                </Heading>
            </Section>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={28} mb={4} mt={6}>
                    2026
                </Heading>
                <UnorderedList spacing={3} pl={4}>
                    <ListItem>
                        Jingwen Bai, <u>Wei Soon Cheong</u>, Philippe Muller, Brian Y Lim. CHI 2026. <Link href="https://arxiv.org/abs/2602.12779" color="teal.500" fontWeight="bold" isExternal>iRULER: Intelligible Rubric-Based User-Defined LLM Evaluation for Revision</Link>.
                    </ListItem>
                    <ListItem>
                        <u>Wei Soon Cheong</u>, Lian Lian Jiang, Jamie Ng Suat Ling. AI4TS Workshop @ AAAI 2026. <Link href="https://github.com/AI4TS/AI4TS.github.io/blob/main/Camera_ready_AAAI2026/36.Assessing_Electricity_Demand_Forecasting_v3.pdf" color="teal.500" fontWeight="bold" isExternal>Assessing Electricity Demand Forecasting with Exogenous Data in TSFMs</Link>.
                    </ListItem>
                    <ListItem>
                        Kritchanat Ponyuenyong, Pengyu Tu, Jia Wei Tan, <u>Wei Soon Cheong</u>, Jamie Ng Suat Ling, Lianlian Jiang. AI4TS Workshop @ AAAI 2026. <Link href="https://github.com/AI4TS/AI4TS.github.io/blob/main/Camera_ready_AAAI2026/32.AAAI_26_AI4TS_Workshop_Paper___Camera_Ready.pdf" color="teal.500" fontWeight="bold" isExternal>Day-Ahead EPF for Volatile Markets Using TSFMs with Regularization Strategy</Link>.
                    </ListItem>
                </UnorderedList>

                <Heading as="h3" variant="section-title" mt={8}>
                    2024
                </Heading>
                <UnorderedList spacing={3} pl={4}>
                    <ListItem>
                        Kotaro Hara, Rosiana Natalie, <u>Wei Soon Cheong</u>, Jingjing Gu, Qianli Xu. ASSETS 2024. <Link href="https://dl.acm.org/doi/10.1145/3663548.3688523" color="teal.500" fontWeight="bold" isExternal>Exploring Conversations between a Practitioner and a Person with Dementia</Link>.
                    </ListItem>
                </UnorderedList>
            </Section>
        </Container>
    </Article>
  )
}

export default Pubs