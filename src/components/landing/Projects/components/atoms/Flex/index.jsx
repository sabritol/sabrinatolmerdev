import styled from 'styled-components';
import { Box } from '../Box';

import { compose, flexbox } from 'styled-system';

const composedHelpers = compose(flexbox);

export const Flex = styled(Box)`
  display: flex;

  ${composedHelpers}
`;

Flex.defaultProps = {};