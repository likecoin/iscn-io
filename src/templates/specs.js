import React from "react"
import { graphql, withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const html = markdownRemark.html
    // Replace all `/v[version].md` to `-v[version].md` for all links
    .replace(
      /\/?(v\d+)(.md)/g,
      `-$1$2`
    )
    // Correct relative path  for all links
    // Strip away `.md`  for all links
    // Replace `README` to `/` for all links
    .replace(
      /(href=")([A-Za-z1-9./-]+?)(README)?(.md)(#.+?)?(")/g,
      `$1${withPrefix(`${pageContext.pagePath}/`)}$2$5$6`
    )
    // Add anchor to all headings
    .replace(
      /(<h[1-6].*?)(>)(.*?)(<\/h[1-6]>)/g,
      (_, p1, p2, p3, p4) => `${p1} id="${p3.replace(/ /g, '-').toLowerCase()}"${p2}${p3}${p4}`
    )

  const title = html.match(/<h1.*?>(.*?)<\/h1>/)[1]
  return (
    <Layout>
      <SEO title={title} />
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