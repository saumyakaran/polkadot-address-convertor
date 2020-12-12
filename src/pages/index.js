import { Heading } from "@chakra-ui/react"
import React from "react"
import ConvertorApp from "../components/convertor-app"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1" my={8}>A simple address convertor for Polkadot</Heading>
    <ConvertorApp />
  </Layout>
)

export default IndexPage
