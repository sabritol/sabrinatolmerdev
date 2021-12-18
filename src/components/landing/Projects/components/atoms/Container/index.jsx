import styled from "styled-components";
import { Box } from "../Box";

export const Container = styled(Box)`
  margin: 0 auto;
  width: 100%;
`;

Container.defaultProps = {
  minWidth: 288,
  maxWidth: 1440,
  py: 0,
  px: 0
};