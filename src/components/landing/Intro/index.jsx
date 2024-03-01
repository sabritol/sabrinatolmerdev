import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import Particles from "react-tsparticles";
import transparent from "../../../assets/illustrations/trans.png";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import { options } from "./particlesParams";
import { SocialLinks } from "../../common";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Software Developer </h1>
          <Thumbnail>
            <img
              src={transparent}
              className='satelite-animated'
              alt='satelite'
            />
          </Thumbnail>
          <SocialLinks />
        </Details>

        <Particles
          style={{ position: "fixed", width: "100%", zIndex: "-1" }}
          options={options}
        />
      </IntroWrapper>
    </Wrapper>
  );
};
