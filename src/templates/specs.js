import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  let { html } = markdownRemark
  // Strip away .md extension
  html = html.replace(/\.md/g, '')
  if (pageContext.isHome) {
    html = html.replace(/(href=")([^:]+?")/g, '$1/specs/$2')
  }
  const title = pageContext.isHome ? 'Home' : html.match(/<h1>(.*?)<\/h1>/)[1]
  return (
    <Layout>
      <SEO title={title} />
      {!pageContext.isHome && (
        <h4>
          <Link to="/">Back to home</Link>
        </h4>
      )}
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