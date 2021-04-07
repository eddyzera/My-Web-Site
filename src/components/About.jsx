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
                    Tenho 25 anos e trabalho na área de Desenvolvimento Web há 2 anos. Estou me formando em Análise e Desenvolvimento de Sistemas pela FMU. Procuro sempre aprender mais e praticar os novos aprendizados a fim de aprimorar minhas habilidades. Devido à minha paixão por games e ao fato de essa ser uma indústria bastante promissora, pretendo desenvolver projetos focados em jogos eletrônicos e, de alguma forma, fazer parte da evolução desse setor.
                </Text>
            </Box>
        </Box>
    )
}
