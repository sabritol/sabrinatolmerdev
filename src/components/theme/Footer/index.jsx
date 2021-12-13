import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details, Links } from './styles';
import { SocialLinks } from '../../common';
export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h4>Sabrina Tolmer</h4>
            <SocialLinks/>
        <span>
           I wish you all the best this {new Date().getFullYear()} | Made with Gatsby
          <span aria-label="love" role="img">
            💖
            <Links>
            </Links>
          </span>
        
        </span>
      </Details>
   
    </Flex>
  </Wrapper>
);
