import React from 'react'
import { 
    Box,
    Text,
    Heading,
    useMediaQuery
} from '@chakra-ui/react'

export default function Baner() {
    const [isMobile] = useMediaQuery('(max-width: 640px)')

    return (
        <Box as="section">
            <Box
                display="flex"
                flexDirection="column"
                alignItems={isMobile ? 'center': 'flex-start'}
                height="75vh"
                justifyContent="center"
            >
                <Text color="purple" >Ola eu sou</Text>
                <Heading 
                    as="h1" 
                    margin="20px 0"
                    fontSize={isMobile ? '3rem' : '5rem'}
                    color="purple"
                    transition="ease 0.9s"
                >
                    Edgar Silva
                </Heading>
                <Heading 
                    as="h2" 
                    margin="20px 0"
                    fontSize={isMobile ? '1.4rem' : '3rem'}
                    transition="ease 0.9s"
                >Um aventureiro da Tecnologia</Heading>
                <Text 
                    margin="20px 0" 
                    maxWidth="800px"
                    fontSize="400"
                    fontSize="0.98rem"
                    transition="ease 0.9s"
                >
                        Desbravar novas tecnologias e conhecer elas é o que me move, criar aplicações que venham empactar vidas faz o meu trabalho fazer sentido, sou amante dessa área pois sei que nunca irei saber de tudo sempre irei subir de level a cada dia.
                    </Text>
            </Box>
        </Box>
    )
}
