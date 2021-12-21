import styled from "styled-components";
import { Typography } from "../Typography";

export const Annotation = styled(Typography)`
    color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};
`;
Annotation.defaultProps = {
  color: "subText",
  fontSize: 3,
  py: 1
};