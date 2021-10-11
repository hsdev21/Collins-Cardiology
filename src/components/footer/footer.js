import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import FooterNav from "./footer-navigaton/footer-navigation"
import logo from "../../images/footer-logo.png"

const Footer = () => (
  <footer>
    <Container className={footerStyles.footerTextContainer}>
      <Row>
        <Col className={`${footerStyles.footerLogo} text-center`}>
          <img
            className={footerStyles.footerLogo}
            src={logo}
            alt="Regency Walk In logo"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className={`${footerStyles.map} text-center`}>
          <h3>
            Telephone: <a href="tel:+1-912-384-6276">912.384.6276</a>
          </h3>
          <p>
            1400 Peterson Avenue N<br />
            Suite C<br />
            Douglas, GA 31533
            <br />
            Monday - Friday: 8 a.m. - 5 p.m.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.985312140025!2d-82.85219988504483!3d31.5245633540896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f02b7810a8f7cd%3A0x56990f363a7e4cc0!2sCollins%20Cardiology!5e0!3m2!1sen!2sus!4v1633638612375!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "1px solid #C1D72F", maxWidth: "900px" }}
            loading="lazy"
            title="Regency Walk In location map"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className={footerStyles.footerNav}>
          <FooterNav />
        </Col>
      </Row>
    </Container>
    <Container className={footerStyles.footerCopyRight} fluid>
      <span>
        &copy; {new Date().getFullYear()} Collins Cardiology. All rights
        reserved. | Website by{" "}
        <a href="https://patientfetch.com" target="_blank" rel="noreferrer">
          PatientFetch
        </a>
      </span>
    </Container>
  </footer>
)

export default Footer
