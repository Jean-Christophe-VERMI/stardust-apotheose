import styled from 'styled-components';

const AppStyled = styled.div`
  width: 100%;
  font-family: ${props => props.theme.fonts.default};
  line-height: ${props => props.theme.lineHeight};
`;

export default AppStyled;
