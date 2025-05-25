import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Details, Links } from "./styles";
import { SocialLinks } from "../../common";
export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <br></br>
        <h1>Sabrina Tolmer</h1>
        <SocialLinks />
        <br></br>
        <span>
          Best {new Date().getFullYear()}
          <br></br>
          <span aria-label='love' role='img'>
            <Links></Links>
          </span>
        </span>
      </Details>
    </Flex>
  </Wrapper>
);
