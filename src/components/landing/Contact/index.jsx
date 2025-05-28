import React from "react";
import { Container, Button } from "components/common";
import { Wrapper, Details, Thumbnail } from "./styles";

export const Contact = () => (
  <Wrapper as={Container} id='contact'>
    <Details>
      <h2>Feel like getting in touch?</h2>
      <br></br>
      <br></br>

      <a
        href='https://calendar.app.google/cereNUHfGgdatwXRA'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button as='span'>Let's have a chat.</Button>
      </a>
    </Details>
  </Wrapper>
);
