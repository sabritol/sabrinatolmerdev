import styled from "styled-components";
import { Typography } from "../Typography";

export const Heading = styled(Typography)`
  font-size: ${props =>
    props.as === "h1" ? "24px" : props.as === "h2" ? "20px" : "16px"};
`;

Heading.defaultProps = {
  as: "h1",
  fontWeight: 2,
  color: "textTitle"
};
