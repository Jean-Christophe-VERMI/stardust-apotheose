import styled from 'styled-components';

import profilbg from './profil-bg.jpg';

const UserProfil = styled.section`

  background-image: url(${profilbg});
  background-position: center;
  background-size: cover;
  min-height : 100vh;

  .container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto auto;
  }

`;

export default UserProfil;
