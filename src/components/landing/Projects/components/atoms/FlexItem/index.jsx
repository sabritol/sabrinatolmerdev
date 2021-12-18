import styled from "styled-components";
import { Flex } from "../Flex";

export const FlexItem = styled(Flex)``;
FlexItem.defaultProps = {
  bg: "brand",
  height: 300,
  width: 300,
  mb: 4,
  fontSize: 10,
  fontWeight: 2,
  color: "text100",
  justifyContent: "center",
  alignItems: "center"
};