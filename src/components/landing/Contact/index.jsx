import React from 'react';
import { Container } from 'components/common';
import purple from 'assets/illustrations/purple.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
    <h2>Interested in working together?</h2>
    <h3> Let's have a chat. </h3> 
      <img src={purple} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
