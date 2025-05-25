import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container } from "components/common";
import Particles from "react-tsparticles";
import transparent from "../../../assets/illustrations/trans.png";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import { options } from "./particlesParams";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>SABRINA TOLMER </h1>
          <Thumbnail>
            <img
              src={transparent}
              className='satelite-animated'
              alt='satelite'
            />
          </Thumbnail>
        </Details>

        <Particles
          style={{ position: "fixed", width: "100%", zIndex: "-1" }}
          options={options}
        />
      </IntroWrapper>
    </Wrapper>
  );
};
