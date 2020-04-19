import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import Terminal from '../components/Terminal'
import IndexLayout from '../layouts'

interface BlogTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data }) => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <Terminal>
            <h1>Blog: {data.markdownRemark.frontmatter.title}</h1>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Terminal>
        </Container>
      </Page>
    </IndexLayout>
  )
}
export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
