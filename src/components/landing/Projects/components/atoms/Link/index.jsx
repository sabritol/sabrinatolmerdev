import styled from "styled-components";

import { Box } from "../index";

export const Link = styled(Box)`
  transition: opacity 0.5s ease-in-out;
  :hover {
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
  }
`;
Link.defaultProps = {
  as: "a",
  color: "link"
};