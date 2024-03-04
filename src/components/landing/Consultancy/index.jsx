import React, { useContext } from "react";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "components/common";
// import Sabrina from "../../../assets/illustrations/sabrina.jpeg";
import { Details } from "../Skills/styles";
import { Wrapper, ConsultancyWrapper, TextWrapper, Paragraph } from "./styles";
import { ThemeContext } from "providers/ThemeProvider";

export const Consultancy = () => {
  const { theme } = useContext(ThemeContext);
  const handleResumeClick = () => {
    const resumePdfUrl = "/resume.pdf";
    window.open(resumePdfUrl, "_blank");
  };
  return (
    <Wrapper id='consultancy'>
      <ConsultancyWrapper as={Container}>
        <Details theme={theme}>
          <h2> React Consultancy</h2>
          <TextWrapper theme={theme}>
            <Paragraph theme={theme}>
              With in-depth knowledge of React and its ecosystem, I offer
              specialized solutions to enhance your digital presence.
            </Paragraph>
            <p>
              <strong> 🚀 Custom Development.</strong> Building dynamic,
              responsive user interfaces with React, customized to meet your
              specific needs.
            </p>
            <p>
              <strong> 🔧 Code Optimization.</strong> Improving the performance
              and scalability of your existing React applications.
            </p>
            <p>
              <strong> 🔮 Technical Guidance.</strong> Advising on best
              practices, architecture, and integrating advanced tools for
              optimal results.
            </p>
            <p>
              Partner with me to navigate the complexities of web development
              with ease. Transform your concepts into impactful digital
              experiences! Reach out to discuss your project requirements.
            </p>

            <Button onClick={handleResumeClick}>See my Resume</Button>
          </TextWrapper>
        </Details>
      </ConsultancyWrapper>
    </Wrapper>
  );
};
