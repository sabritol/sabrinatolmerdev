import React, { useContext } from "react";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "components/common";
// import Sabrina from "../../../assets/illustrations/sabrina.jpeg";
import { Details } from "../Skills/styles";
import { Wrapper, ConsultancyWrapper, TextlWrapper } from "./styles";
import { ThemeContext } from "providers/ThemeProvider";

export const Consultancy = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id='consultancy'>
      <ConsultancyWrapper as={Container}>
        <Details theme={theme}>
          <TextlWrapper theme={theme}>
            <h2> ⚛️ React Development </h2>
            <br></br>
            <div style={{ padding: "10px", marginTop: "3px" }}>
              <p>
                - With in-depth knowledge of React and its ecosystem, I offer
                specialized solutions to enhance your digital presence.
              </p>
              <p>
                <strong> 🚀 Custom Development.</strong> Building dynamic,
                responsive user interfaces with React, customized to meet your
                specific needs.
              </p>
              <p>
                <strong> 🔧 Code Optimization.</strong> Improving the
                performance and scalability of your existing React applications.
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
            </div>
          </TextlWrapper>
        </Details>
      </ConsultancyWrapper>
    </Wrapper>
  );
};
