import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import homePageStyles from "./index.module.scss"
import GravityForm from "../components/gravity-form/gravity-form"
import SEO from "../components/seo"
import { GetHomePageMeta } from "../hooks/getHomePageMeta"
import { graphql } from "gatsby"

import "./index.scss"

const IndexPage = ({ data }) => {
  const {
    seo: {
      schema: { siteUrl, siteName },
    },
    pages: { nodes },
  } = GetHomePageMeta()
  const { seo, date } = nodes[0]

  return (
    <Layout>
      <SEO seoInfo={seo} siteUrl={siteUrl} siteName={siteName} date={date} />
      <BackgroundImage
        fluid={data.section1.childImageSharp.fluid}
        className={`${homePageStyles.section1} ${homePageStyles.genericSection}`}
        style={{
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Row className={homePageStyles.row}>
            <Col lg={6} className={`${homePageStyles.text}`}>
              <h1>Welcome to Regency Walk-In Clinic</h1>
              <p>
                The need to visit an urgent care clinic can be sudden,
                inconvenient, and sometimes downright scary. At Regency Walk-In
                Clinic, we are dedicated to giving you the caring support and
                excellent medical attention you need to address your issue
                quickly, directly, and affordably, Monday through Friday.
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.heroForm}>
              <p>
                <small>
                  Contact Us. We're ready to help.
                  <br />
                  Call <a href="+1-910-486-5700">910-486-5700</a>
                  <br />
                  Or Use Our Online Contact Form
                </small>
              </p>
              <div className={`${homePageStyles.gravityForm} gravityForm`}>
                <GravityForm className={homePageStyles.gravityForm} />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
      <Container fluid className={homePageStyles.callOut}>
        <Container>
          Same-day medical care, given with open hearts and healing hands.
        </Container>
      </Container>
      <Container fluid className={homePageStyles.section2}>
        <Container className={homePageStyles.genericSection}>
          <Row className={homePageStyles.mobileReverse}>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Why Regency Walk-In Clinic?</h2>
              <p>
                Regency Walk-In Clinic was founded to offer high-quality,
                compassionate care to the Douglas and neighboring South Georgia
                communities. We believe that outstanding medical treatment
                should be affordable and accessible, with minimal waiting and
                maximum efficiency. We work every day to deliver personalized,
                first-class treatment to every patient, regardless of medical
                complaint or level of insurance coverage. Your well-being,
                health, and comfort are our priorities.
              </p>
              <p>
                We treat our patients like family, and like every happy family,
                we are always thrilled to welcome new members!
              </p>
              <p>Need More Information? We’re more than happy to talk.</p>
              <p>
                <Button
                  variant={"primary"}
                  className={homePageStyles.secondaryBtn}
                  href="tel:+1-910-486-5700"
                >
                  Call Now
                </Button>
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section2.childImageSharp.fluid}
                alt="A man holding his leg."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section3.childImageSharp.fluid}
                alt="A couple sitting together."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>What is Urgent Care?</h2>
              <p>
                Urgent care differs from emergency care in that urgent care
                treats conditions that are not inherently life-threatening but
                are concerning enough to cause discomfort or affect your quality
                of life. Examples of non-critical conditions treated at Regency
                Walk-In Clinic include:
              </p>
              <ul>
                <li>
                  Allergic reactions (non-life-threatening inflammation, hives,
                  or rashes)
                </li>
                <li>Bladder or urinary tract infections </li>
                <li>Cough, congestion</li>
                <li>Eye irritation/infection (conjunctivitis)</li>
                <li>Fever, flu-like symptoms </li>
                <li>Insect bites or stings </li>
                <li>Minor burns</li>
                <li>Rashes/boils</li>
                <li>Sore throat, earache</li>
                <li>Sprains/muscle pulls or tears</li>
                <li>STIs (Sexually Transmitted Infections)</li>
              </ul>
              <p>
                Additionally, we offer physical examinations (routine physicals)
                for employment, school athletic programs, or other entities that
                require basic health checks.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/services/"
                >
                  Services
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section6.childImageSharp.fluid}
                alt="A couple sitting together."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Don’t Put Your Health on Hold.</h2>
              <p>
                We recognize that seeking medical treatment for non-emergency
                conditions can sometimes pose challenges. Many patients feel
                that they can’t afford to take time off of work. Others have
                childcare or family obligations that might make trips to a
                physician difficult. Some might not have insurance and fear the
                cost of medical treatment could be too high. However, when it
                comes to your health, it does not pay to wait. Early care of a
                condition can significantly reduce the time to complete healing.
              </p>
              <p>
                Regency Walk-In Clinic offers ease and flexibility. Our
                family-friendly clinic is open Monday through Friday, 8:30 a.m.
                to 8:00 p.m., so you can visit at your convenience. We’re proud
                of our ability to connect patients to a medical practitioner
                quickly and address their concerns immediately. We are also
                happy to work with underinsured and uninsured patients.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/before-you-visit/"
                >
                  Before You Visit
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={`${homePageStyles.homeImg} ${homePageStyles.blueBorder}`}
                fluid={data.section3.childImageSharp.fluid}
                alt="A couple sitting together."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Our Promise to Our Patients</h2>
              <p>Our patients always come first. </p>
              <p>
                South Georgia native and Regency Walk-In Clinic founder Dr.
                Darrel Collins is committed to offering comprehensive,
                patient-focused health services. Every patient is unique, with
                different needs, lifestyles, responsibilities, and medical
                concerns. Dr. Collins and the entire team at Regency Walk-In
                Clinic are driven to assure an exceptional experience and
                successful outcomes for every patient.
              </p>
              <p>
                Together, we will discover the right treatment plans and
                aftercare strategies to help you manage or overcome your medical
                challenges effectively.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/about-us/"
                >
                  About Us
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <BackgroundImage
        fluid={data.contactSection.childImageSharp.fluid}
        className={`${homePageStyles.contactSection}`}
        alt="A technician with a patient under a machine."
      >
        <Container>
          <Row>
            <Col
              lg={{ span: 6, offset: 3 }}
              className={homePageStyles.formContainer}
            >
              <h2>
                Contact Us.
                <br />
                We're Ready to Help.
              </h2>
              <p className="text-center">
                {" "}
                Call <a href="tel:+1-912-384-6276">912-384-6276</a>
                <br />
                <small>Or Use Our Easy Online Form.</small>
              </p>
              <div className="gravityForm">
                <GravityForm />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query {
    section1: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section2: file(relativePath: { eq: "section-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section3: file(relativePath: { eq: "section-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section4: file(relativePath: { eq: "section-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section6: file(relativePath: { eq: "section-6.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section7: file(relativePath: { eq: "section-7.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aetna: file(relativePath: { eq: "aetna.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blue: file(relativePath: { eq: "blue.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contactSection: file(relativePath: { eq: "contact-us-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sliderImage: file(relativePath: { eq: "slider.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
