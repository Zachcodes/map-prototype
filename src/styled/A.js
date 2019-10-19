import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #494949;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
  ${({ margin = '' }) =>
    margin
      ? `margin: ${margin
          .split(' ')
          .map(m => `${m}px`)
          .join(' ')};`
      : ''}
  ${({ active }) =>
    active ? 'border-bottom: 3px solid #494949' : ''}
  :visited {
    color: #494949;
  }
`;

export const LinkButton = styled(Link)`
  width: 217px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #cc4343;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1.42px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
