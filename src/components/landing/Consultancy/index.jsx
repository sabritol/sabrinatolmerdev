import React, { useContext } from "react";
import { Container, Button } from "components/common";
import { Wrapper, ConsultancyWrapper, TextWrapper, Paragraph } from "./styles";
import { ThemeContext } from "providers/ThemeProvider";

export const Consultancy = () => {
  const { theme } = useContext(ThemeContext);
  const handleResumeClick = () => {
    const resumePdfUrl = "/sabrinatolmercv.pdf";
    window.open(resumePdfUrl, "_blank");
  };
  return (
    <Wrapper id='consultancy'>
      <h2>CONSULTANCY</h2>
      <ConsultancyWrapper as={Container}>
        <TextWrapper theme={theme}>
          <Paragraph theme={theme}>
            I can support you with Project Management, React Development, and
            Technical Strategy
          </Paragraph>
          <Paragraph theme={theme}>
            With a strong foundation in modern web technologies, development
            pipelines, and collaborative tooling, I offer hands-on support
            across the software lifecycle. I’m experienced in Agile workflows,
            monitoring pull requests, coordinating sprints, and stepping in as a
            Scrum Master when needed.
          </Paragraph>
          <Paragraph theme={theme}>
            Thanks to my diverse background across IT, design, and creative
            tech, I can recognize emerging technological trends early and help
            teams make informed, future-proof decisions. Whether you're building
            a product or aligning cross-functional teams, I bring structure,
            calm organization, and a technical mindset to the table.
          </Paragraph>
          <Paragraph theme={theme}>
            If you're looking for a reliable collaborator to strengthen your
            development processes or project execution, let’s connect.{" "}
          </Paragraph>

          <br></br>
          <Button onClick={handleResumeClick}>See my Resume</Button>
        </TextWrapper>
      </ConsultancyWrapper>
    </Wrapper>
  );
};
