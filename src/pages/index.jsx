import React from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'
import Baner from '../components/Baner'
import About from '../components/About'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Ed Silva Portfolio</title>
      </Head>
      <Container maxW="container.lg">
        <Header />
        <Baner />
        <About />
        <Card value={data} />
        <Footer />
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {

  const response = await fetch('https://api.github.com/users/eddyzera/repos', {
    method: 'get'
  })

  const data = await response.json()

  return {
      props: { data }
  }
}
