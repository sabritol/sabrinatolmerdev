import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dog from 'assets/illustrations/dog.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dog} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
        <h2>Engineering beyond the box  </h2>
				<p>
				I do have extensive experience in the creative industry, 
				having devoted most of my career to dance and digital art. 
				As a result, I have developed a solid knowledge of software engineering oriented to computer vision and interactive technologies{' '}
				</p>
				<p>
				I am passionate about UX/UI, animated interfaces, game Applications and augmented platforms.
				</p>
				<p>
				I'm also an AI / Deep Learning, enthusiastic researcher.
				</p>
				<p />
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
