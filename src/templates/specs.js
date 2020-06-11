import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  let { html } = markdownRemark
  // Strip away .md extension
  html = html.replace(/\.md/g, '')
  return (
    <Layout>
      <div
        className="spec-page"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`