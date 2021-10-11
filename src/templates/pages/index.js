import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header/page-header"
import { Container, Row, Col, Button } from "react-bootstrap"
import pageStyles from "./pageStyles.module.scss"
import contentParser from "gatsby-wpgraphql-inline-images"

import "./pageStyles.scss"

const Page = ({
  data: {
    wpcontent: {
      seo: {
        schema: { siteUrl, siteName },
      },
      page: { seo, title, content, date },
    },
  },
  pageContext: {
    pluginOptions: { wordPressUrl, uploadsUrl },
  },
}) => {
  const pageContent = contentParser({ content }, { wordPressUrl, uploadsUrl })
  return (
    <Layout>
      <SEO seoInfo={seo} siteUrl={siteUrl} siteName={siteName} date={date} />
      <PageHeader pageTitle={title} />
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col lg={8} className={pageStyles.pageContent}>
            <div>{pageContent}</div>
          </Col>
          <Col lg={4} className={`${pageStyles.sidebar} sidebar`}>
            <div className={pageStyles.innerSidebar}>
              <p className={pageStyles.borderBottom}>Walk-ins Welcome</p>
              <p className={pageStyles.borderBottom}>
                No Appointment Necessary
              </p>
              <Button
                className={pageStyles.callButton}
                href="tel:+1-912-384-6276"
              >
                Call 912.384.6276
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetPagesQuery($id: ID!) {
    wpcontent {
      seo {
        schema {
          siteUrl
          siteName
        }
      }
      page(id: $id) {
        content
        title
        uri
        date
        seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          title
        }
      }
    }
  }
`

export default Page
