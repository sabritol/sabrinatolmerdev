import styled from "styled-components";
import { Typography } from "../Typography";

export const Paragraph = styled(Typography)`
color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};
`;
Paragraph.defaultProps = {
  fontSize: 4,
  pb: 3
};