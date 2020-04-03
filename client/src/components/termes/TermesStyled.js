import styled from 'styled-components';

export const TermesStyled = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  margin-bottom: ${props => props.theme.sizings.large};
  height: 100vh;
  overflow-y: auto;

  .termes {
    max-width: 50%;
    margin: 0 auto;
    padding: ${props => props.theme.sizings.small};
    text-align: center;
    border: 1px solid ${props => props.theme.colors.white};
  }

  h1 {
    max-width: auto;
    color: white;
    text-align: center;
    padding-top: 12rem;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizes.larger};
    padding-bottom: ${props => props.theme.sizings.larger};
    line-height: 2rem;
  }

  h2 {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.sizings.medium};
    padding: ${props => props.theme.sizings.large};
    text-align: center;
  }

  p,
  li {
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.white};
    margin-left: ${props => props.theme.sizings.large};
    padding: ${props => props.theme.sizings.small};
    max-width: 60%;
    text-align: center;
  }
`;

export default TermesStyled;
