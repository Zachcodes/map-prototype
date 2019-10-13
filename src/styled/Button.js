import styled from 'styled-components';

const Button = styled.button`
  width: 217px;
  height: 86px;
  background-color: #cc4343;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1.42px;
  text-align: center;
  color: #ffffff;
  outline: none;
  :hover {
    cursor: pointer;
  }
`;

export const UploadButton = styled(Button)`
  width: auto;
  padding: 8px 16px;
  background-color: #d8d8d8;
  color: #505050;
  border: solid 1px #979797;
  border-radius: 8px;
  word-wrap: break-word;
  max-width: 500px;
  font-size: 23px;
`;

export default Button;
