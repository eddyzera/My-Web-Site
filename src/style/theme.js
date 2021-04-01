import { extendTheme } from '@chakra-ui/react'

const cunstomTheme = extendTheme({
    colors: {
        black: '#1A202C',
        purple: '#7C5DF9',
        white: '#FFF'
    },

    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Open Sans, sans-serif',
        mono: 'system-ui, sans-serif'
    },

    styles: {
        global: {

            'html, body': {
                fontSize: '16px',
                bg: 'black',
                fontFamily: 'body',
                margin: 0,
                padding: 0,
                boxSize: 'border-box'
            },

            a: {
                textDecoration: 'none'
            },

            button: {
                cursor: 'pointer'
            },

            h1: {
               fontFamily: 'heading',
               color: 'white',
               fontSize: '4rem',
               fontWeight: '700'
            },

            h2: {
                fontFamily: 'heading',
                color: 'white',
                fontSize: '2rem',
                fontWeight: '700'
            },

            h3: {
                fontFamily: 'heading',
                color: 'white',
                fontSize: '2rem',
                fontWeight: '500'
            },

            p: {
                fontFamily: 'mono',
                color: '#a0aec0'
            }
        }
    },
})

export default cunstomTheme