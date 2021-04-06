import React, { useState, useEffect } from 'react'
import { 
    Box,
    Heading,
    Divider,
    List,
    ListItem,
    ListIcon,
    Text
} from '@chakra-ui/react'
import { 
    FaHtml5, 
    FaCss3Alt,
    FaSass,
    FaNodeJs,
    FaCheckCircle
} from "react-icons/fa"
import { SiJavascript, SiReact } from "react-icons/si"
import { GoRepo } from "react-icons/go"

export default function Card({ value }) {

    const [reposPar, setReposPar] = useState([])
    const [reposInpar, setReposInpar] = useState([])
    
    useEffect(() => {
        function parInparRepos() {
            const valueRepoPar = value.slice(0, 5)
            const valueRepoInpar = value.slice(5, 10)
            setReposPar(valueRepoPar)
            setReposInpar(valueRepoInpar)
        }

        parInparRepos()
    }, [value])

    return (
        <Box 
            as="section"
            padding="2rem 0"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='row'
                sx={{
                    '@media (max-width: 940px)': {
                        flexDirection: 'column'
                    }
                }}
                width="100%"
            >

                <Box
                    width='50%'
                    padding="1rem 2rem"
                    border="1px solid #a0aec087"
                    borderRadius="5px"
                    maxHeight="800px"
                    minHeight="350px"
                    marginRight='30px'
                    bg="black"
                    sx={{
                        '@media (max-width: 940px)': {
                            width: '100%',
                            marginRight: '0',
                            marginBottom: '30px'
                        }
                    }}
                >
                    <Box>
                        <Heading 
                            as="h2"
                            margin="20px 0"
                            textAlign="center"
                        >
                            Habilidades
                        </Heading>
                        <Divider />
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                    >    
                        <List 
                            spacing={3}
                            margin="20px 0"
                        >
                            <ListItem 
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon 
                                    as={FaHtml5} 
                                    color="purple"
                                    fontSize="1.5rem"
                                />
                                <Text>HTML 5</Text>
                            </ListItem>

                            <ListItem 
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon 
                                    as={FaCss3Alt} 
                                    color="purple"
                                    fontSize="1.5rem"
                                />
                                <Text>CSS 3</Text>
                            </ListItem>

                            <ListItem 
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon 
                                    as={FaSass} 
                                    color="purple"
                                    fontSize="1.5rem"
                                />
                                <Text>SASS</Text>
                            </ListItem>

                            <ListItem 
                                display="flex"
                                alignItems="center"
                            >
                                <ListIcon 
                                    as={SiJavascript} 
                                    color="purple"
                                    fontSize="1.3rem"
                                />
                                <Text>Javascript</Text>
                            </ListItem>
                        </List>

                            
                        <List 
                            spacing={3}
                            margin="20px 0"
                        >
                                <ListItem 
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ListIcon 
                                        as={SiReact} 
                                        color="purple"
                                        fontSize="1.3rem"
                                    />
                                    <Text>React.js</Text>
                                </ListItem>

                                <ListItem 
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ListIcon 
                                        as={FaNodeJs} 
                                        color="purple"
                                        fontSize="1.3rem"
                                    />
                                    <Text>Node.Js</Text>
                                </ListItem>

                                <ListItem 
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ListIcon 
                                        as={FaCheckCircle} 
                                        color="purple"
                                        fontSize="1.3rem"
                                    />
                                    <Text>Chakra UI</Text>
                                </ListItem>

                                <ListItem 
                                    display="flex"
                                    alignItems="center"
                                >
                                    <ListIcon 
                                        as={FaCheckCircle} 
                                        color="purple"
                                        fontSize="1.3rem"
                                    />
                                    <Text>UX</Text>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>

                <Box
                    width='50%'
                    padding="1rem 2rem"
                    border="1px solid #a0aec087"
                    borderRadius="5px"
                    minHeight="350px"
                    maxHeight="800px"
                    sx={{
                        '@media (max-width: 940px)': {
                            width: '100%',
                        }
                    }}
                >
                    <Heading 
                        as="h2"
                        margin="20px 0"
                        textAlign="center"
                    >
                        Repositorios
                    </Heading>
                    <Divider />
                    <Box
                        alignItems="center"
                        justifyContent="space-around"
                    >
                        <List
                            spacing={3}
                            margin="20px 0"
                        >
                            { reposPar.map( repo => {
                                return (
                                    <ListItem 
                                        display="flex"
                                        alignItems="center"
                                        key={repo.id}
                                        transition="ease 0.9s"
                                        _hover={{
                                            transform: 'scale(1.1)'
                                        }}
                                    >
                                        <ListIcon 
                                            as={GoRepo} 
                                            color="purple"
                                            fontSize="1.3rem"
                                        />
                                        <Text 
                                            as="a" 
                                            href={repo.html_url}
                                            target="_blank"
                                        >
                                            {repo.name}
                                        </Text>
                                    </ListItem>
                                )
                            } ) }
                        </List>

                        <List
                            spacing={3}
                            margin="20px 0"
                        >
                            { reposInpar.map( repo => {
                                return (
                                    <ListItem 
                                        display="flex"
                                        alignItems="center"
                                        key={repo.id}
                                        transition="ease 0.9s"
                                        _hover={{
                                            transform: 'scale(1.1)'
                                        }}
                                    >
                                        <ListIcon 
                                            as={GoRepo} 
                                            color="purple"
                                            fontSize="1.3rem"
                                        />
                                        <Text 
                                            as="a" 
                                            href={repo.html_url}
                                            target="_blank"
                                        >
                                            {repo.name}
                                        </Text>
                                    </ListItem>
                                )
                            } ) }
                        </List>
                    </Box>  
                </Box>
            </Box>   
        </Box>
    )
}
