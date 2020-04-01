import styled from 'styled-components';

const InfoPageStyled = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  height: 100%;
  display: flex;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.largest};
    font-weight: bold;
    text-align: center;
    margin-bottom: ${props => props.theme.sizings.large};
  }

  .info-page {
    justify-content: space-between;
    width: 50%;
    margin: auto;
    padding: ${props => props.theme.sizings.large};
  }

  .text-infos {
    color: ${props => props.theme.colors.white};
    text-align: justify;
    margin: ${props => props.theme.sizings.medium};
  }

  .contact-link {
    margin: ${props => props.theme.sizings.medium};
    padding: ${props => props.theme.sizings.medium};
    border-radius: ${props => props.theme.sizings.small};
    border: 1px solid ${props => props.theme.colors.white};
  }
`;

export default InfoPageStyled;
