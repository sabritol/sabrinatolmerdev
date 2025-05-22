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
        <TextWrapper theme={theme}>
          <Paragraph theme={theme}>
            Helping personal brands stay organized and creative with Notion,
            project management, and a developer’s eye.
          </Paragraph>
          <strong> 🚀 Application Development</strong>
          <br></br>
          <p>
            I support agile workflows, monitor pull requests, and step in as
            Scrum Master when needed. Let’s connect if you're looking for
            thoughtful leadership and smooth execution.
          </p>

          <p>
            <strong>
              🏐 I’m a Virtual Executive Assistant and Project Manager
            </strong>{" "}
            <br></br>
            <p>
              with a background in front-end development, photography and
              advertising.
            </p>
          </p>
          <p>
            I bring technical understanding, creative sensitivity, and calm
            organization to every project.
          </p>
          <p>Let’s connect and see how I can support your work.</p>
          <br></br>
          <Button onClick={handleResumeClick}>See my Resume</Button>
        </TextWrapper>
      </ConsultancyWrapper>
    </Wrapper>
  );
};
