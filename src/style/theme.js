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

            h1,
            h2,
            h3,
            h4,
            h5,
            h6: {
               fontFamily: 'heading',
               color: 'white'
            },

            p: {
                fontFamily: 'mono',
                color: 'white'
            }
        }
    },
})

export default cunstomTheme