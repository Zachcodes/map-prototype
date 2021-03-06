import styled from 'styled-components';
import { setFlex, setHeight, setWidth } from '../utils/styledFunctions';

const Div = styled.div`
  ${setFlex}
  ${setHeight}
  ${setWidth}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
`;

export default Div;
