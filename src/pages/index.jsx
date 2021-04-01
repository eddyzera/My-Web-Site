import React from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'
import Baner from '../components/Baner'

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Ed Silva Portfolio</title>
      </Head>
      <Container maxW="container.lg">
        <Header value={data} />
        <Baner />
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('https://api.github.com/users/eddyzera', {
    method: 'get'
  })
  const data = await response.json()

  return {
      props: { data }
  }
}
