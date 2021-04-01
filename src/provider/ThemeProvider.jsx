import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import customTheme from '../style/theme'

export default function ThemeContainer({ children }) {
    return (
        <ChakraProvider theme={customTheme}>
            {children}
        </ChakraProvider>
    )
}
