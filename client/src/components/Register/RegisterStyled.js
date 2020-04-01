import styled from 'styled-components';
import stars from './images/register-bg.jpg';

export const RegisterStyled = styled.div`

    background-image: url(${stars});
    background-position: center;
    background-size: cover;
   
   #register-form {
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }

  .register-form-element {
    background-color: rgba(130, 204, 221, 0.7);
    padding: ${props => props.theme.sizings.large};
    border-radius: ${props => props.theme.radius.medium};
    margin-top: auto;
    margin-bottom: auto;

    h1 {
      color: ${props => props.theme.colors.white};
      text-align: center;
      margin-bottom: ${props => props.theme.sizings.large};
      font-size: ${props => props.theme.fontSizes.large};
    }

    p{
      color: ${props => props.theme.colors.white};
      text-align: center;
    }

  }

  field {
    display: block;
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.fontSizes.default};
    border: 1px solid ${props => props.theme.colors.darkBlue};
    border-radius: ${props => props.theme.radius.medium};
    width: 100%;
    margin-top: ${props => props.theme.sizings.largest};
  }

  .terms-button-submit {
    text-align: center;
  }

 

  .terms {
    color: ${props => props.theme.colors.white};
  }


    &:hover:enabled {
      background-color : #0a3d62; // LE FICHIER DE THEME !
      color : white;
      transition-duration: .3s;
     
    }
  }
  button:hover:disabled{
    background-color : white;
}   
`;

export default RegisterStyled;
