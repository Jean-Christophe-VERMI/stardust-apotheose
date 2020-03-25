import styled from 'styled-components';
import planet from './icons/planet.svg';
import helmet from './icons/helmet.svg';

const NavStyled = styled.nav`
    width : 100%;
    top : 10px;
    z-index : 6;
    position : sticky;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 0rem 1rem ;
    color : white;

    nav {
      display : flex;
      flex-direction : row;
      align-items : center;
  
      @media screen and (max-width: 650px) {
      display : flex;
      flex-direction : column;
      align-items : center;
      }
    }
    

    .button-planet {
        background-image : url(${planet});
        padding : 2rem;
        background-position: center;
        background-repeat : no-repeat;
        background-color : transparent;
        border : none;
        margin-left : 1rem;
        
    }

    .button-login {
        background-image : url(${helmet});
        padding : 1.5rem;
        background-position: center;
        background-repeat : no-repeat;
        background-color : transparent;
        border : none;
        margin-right : 1rem;
    }

    .link-menu {
        margin : 1rem;
        font-size: 1.7rem;
        &:hover {
            text-decoration : underline;
            color : #60a3bc;
        }
    }

    .loginForm {
        max-width : 390px;
        display: flex;
        flex-direction : row;
        flex-wrap: wrap;
        justify-content : space-between;
        vertical-align : middle;
        animation: fadein 2s;
        transition: transform 0.3s ease-in-out;
    }

    .loginForm--closed {
        display : none;
    }

    .nav-menu {
        max-width : 390px;
        display: flex;
        flex-direction : row;
        flex-wrap: wrap;
        justify-content : space-between;
        vertical-align : middle;
        animation: fadein 2s;
        transition: transform 0.3s ease-in-out;
    }

    .nav-menu--closed {
        display : none;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;

export default NavStyled;
