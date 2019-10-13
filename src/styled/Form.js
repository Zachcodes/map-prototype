import styled from 'styled-components';
import { Form } from 'formik';
import { setWidth } from '../utils/styledFunctions';

const StyledForm = styled(Form)`
  ${setWidth}
`;

export const Label = styled.label`
  font-size: 27px;
  letter-spacing: 1.37px;
  color: #505050;
`;

export const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 24px 0;
`;

export default StyledForm;
