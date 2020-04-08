import styled from 'styled-components';
import planet from './icons/planet.svg';
import helmet from './icons/helmet.svg';
import moon from './icons/moon.svg';
import star from './icons/star.svg';

const NavStyled = styled.nav`

  .navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;

    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  .button-planet {
    background-image: url(${planet});
    padding: ${props => props.theme.sizings.large};
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    margin-left: ${props => props.theme.sizings.medium};
    
    @media screen and (max-width: 650px) {
      background-image: url(${moon});
      padding: ${props => props.theme.sizings.medium};
      margin-left: ${props => props.theme.sizings.medium};
    }
  }

  .button-login {
    background-image: url(${helmet});
    padding: ${props => props.theme.sizings.large};
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    margin-right: ${props => props.theme.sizings.medium};

    @media screen and (max-width: 650px) {
      background-image: url(${star});
      padding: ${props => props.theme.sizings.medium};
      margin-right: ${props => props.theme.sizings.medium};
    }
  }

  .link-menu {
    margin: ${props => props.theme.sizings.medium};
    font-size: ${props => props.theme.fontSizes.large};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.colors.linkDark};
    }
  }

  .loginForm {
    max-width: 390px;
    animation: fadein 2s;
    transition: transform 0.3s ease-in-out;
  }

  .loginForm--closed {
    display: none;
  }

  .nav-menu {
    max-width: 390px;
    animation: fadein 2s;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: ${props => props.theme.fontSizes.small};
  }

  .nav-menu--closed {
    display: none;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default NavStyled;
