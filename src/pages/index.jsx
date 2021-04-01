import React from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ed Silva Portfolio</title>
      </Head>
      <Container>
        <Header />
      </Container>
    </>
  )
}
