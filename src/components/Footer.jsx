import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box 
            as="footer"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Container>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text>
                        Site criado usando 
                    </Text>
                    <Text 
                        as="a" 
                        href="https://chakra-ui.com/"
                        marginLeft="5px"
                        target="-_blank"
                    >
                        Chakra UI
                    </Text>
                </Box>
            </Container>  
        </Box>
    )
}
