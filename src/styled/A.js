import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #494949;
  font-size: 20px;
  font-weight: bold;
  ${({ margin = '' }) =>
    margin
      ? `margin: ${margin
          .split(' ')
          .map(m => `${m}px`)
          .join(' ')};`
      : ''}
  :visited {
    color: #494949;
  }
`;
