import React from 'react'
import { 
    Box,
    Avatar,
    useMediaQuery,
    Icon
} from '@chakra-ui/react'
import { 
    FaGithub,
    FaLinkedinIn,
    FaGoogle
} from "react-icons/fa"

export default function Header() {

    const [isMobile] = useMediaQuery('(max-width: 640px)')

    return (
        <Box 
            as="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={isMobile ? 'column' : 'row'}
            padding="2rem 0"
        >
            <Avatar 
                src="profile-pic.png"
                size="xl"
                margin="10px 0"
                bg="none"
            />
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width="100px"
            >
                <Box 
                    as="a"
                    href="https://github.com/eddyzera"
                    target="_blank"
                >
                    <Icon 
                        as={FaGithub}
                        color="white" 
                        fontSize="1.5rem"
                        _hover={{ 
                            color: 'purple',
                            transform: 'scale(1.2)'
                        }}
                        transition="ease 0.9s"
                    />
                </Box>
                <Box 
                    as="a"
                    href="https://www.linkedin.com/in/edgar-silva-reactjs/"
                    target="_blank"
                >
                    <Icon 
                        as={FaLinkedinIn}
                        color="white" 
                        fontSize="1.5rem"
                        _hover={{ 
                            color: 'purple',
                            transform: 'scale(1.2)'
                        }}
                        transition="ease 0.9s"
                    />
                </Box>
                <Box
                    as="a"
                    href="mailto:esilva644@gamil.com"
                >
                    <Icon 
                        as={FaGoogle}
                        color="white" 
                        fontSize="1.5rem"
                        _hover={{ 
                            color: 'purple',
                            transform: 'scale(1.2)'
                        }}
                        transition="ease 0.9s"
                    />
                </Box>
            </Box>
        </Box>
    )
}
