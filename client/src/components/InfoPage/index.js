import React, { useState } from 'react';
import InfoPageStyled from './InfoPageStyled';
import ContactModal from './ContactModal';

import Button from 'src/components/Button';

const InfoPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = value => {
    setShowModal(value);
  };
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

        <Button color='primary' handleClick={() => handleModal(true)}>
          Contactez-nous
        </Button>
      </div>
      <ContactModal
        active={showModal}
        closeModal={() => handleModal(false)}
      ></ContactModal>
    </InfoPageStyled>
  );
};

export default InfoPage;
