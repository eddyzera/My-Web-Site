import React from 'react'
import { 
    Box,
    Heading,
    Divider,
    Text
} from '@chakra-ui/react'

export default function About() {
    return (
        <Box as="section">
            <Box
                width="100%"
                padding="1rem 2rem"
                border="1px solid #a0aec087"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                minHeight="100px"
                maxHeight="800px"
            >
                <Heading 
                    as="h2" 
                    margin="20px 0"
                >
                    Sobre
                </Heading>
                <Divider />
                <Text
                    margin="20px 0"
                >
                    Tenho 25 anos, trabalho com desenvolvimento web há 2 anos, estou me formando em Analise e desenvolvimento de Sistemas pela FMU, procuro sempre aprender mais e praticar tudo aquilo que aprendo para sempre evoluir as minhas habilidades. Gosto muito de games e prentendo construir projetos voltados para essa área pois vejo um grande crescimento e gostaria de alguma forma fazer parte desse crescimento.
                </Text>
            </Box>
        </Box>
    )
}
