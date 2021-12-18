import styled from "styled-components";
import { Box } from "../Box";

import { compose, lineHeight } from "styled-system";

const composedHelpers = compose(lineHeight);

export const Typography = styled(Box)`
  ${composedHelpers}
`;

Typography.defaultProps = {
  // as: 'p',
  fontWeight: 1
  // color: 'text500',
};