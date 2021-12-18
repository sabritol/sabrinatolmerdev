import styled from "styled-components";

import { border, compose, layout, space } from "styled-system";

const composedHelpers = compose(
  layout,
  border,
  space
);

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  ${composedHelpers};
`;

Img.defaultProps = {
  // borderRadius: 8
};