import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import dog from "assets/illustrations/dog.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id='about'>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dog} alt='dog' />
        </Thumbnail>
        <Details theme={theme}>
          <h2>Engineering beyond the box </h2>
          <p>
            With a background that combines IT, art, and technology, I’ve
            developed a generalist mindset that allows me to move between
            roles—whether as a developer, project manager, or creative technical
            producer.
          </p>
          <p>
            Over the years, I’ve worked with cross-functional teams across
            Europe and the U.S., contributing to product development, improving
            internal workflows, and supporting decision-making with a clear
            understanding of both the technical and human sides of the process.
          </p>
          <p>
            I tend to identify patterns early, which helps guide decisions and
            avoid unnecessary complexity. My approach is grounded,
            collaborative, and focused on long-term clarity and consistency.
          </p>
          <p>
            I’m not attached to titles—my goal is simply to contribute where I
            bring the most value and help teams stay aligned, focused, and
            efficient.
          </p>
          <p />
          <a
            href='https://calendar.app.google/cereNUHfGgdatwXRA'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button as='span'>Connect</Button>
          </a>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
