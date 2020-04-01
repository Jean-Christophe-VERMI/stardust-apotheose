import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoPageStyled from './InfoPageStyled';

import Button from 'src/components/Button';
import Anchor from 'src/components/Anchor';

const InfoPage = () => {
  return (
    <InfoPageStyled>
      <div className='info-page'>
        <h1>Bienvenue sur Stardust</h1>
        <p className='text-infos'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
          exercitationem omnis? Consectetur ad doloribus quidem incidunt quos
          voluptate voluptatum officiis autem eaque, veritatis consequatur
          officia nam, sapiente velit? Facere architecto doloremque officia rem.
          Recusandae commodi illo vitae corporis, delectus odio accusantium
          architecto quos laboriosam nostrum sapiente fugiat esse dolorum
          consectetur unde aut, fuga ratione nemo eaque repellendus ipsam optio
          eligendi!
        </p>

        <Button color='primary'>
          <Link to='/register'>Inscrivez-vous</Link>
        </Button>
        <Anchor />
      </div>
    </InfoPageStyled>
  );
};

export default InfoPage;
