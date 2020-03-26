import React from 'react';

import Profil from 'src/containers/Profil';
import Posts from './Posts/Posts';
import UserProfilStyled from './UserProfilStyled';


const UserProfil = () => (
  <UserProfilStyled>
    <div className="container">
      <Profil />
      <Posts />
    </div>
  </UserProfilStyled>
);


export default UserProfil;
