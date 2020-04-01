import React from 'react';
import PropTypes from 'prop-types';

import ContactModalStyled from './ContactModalStyled';
import Button from 'src/components/Button';

const ContactModal = ({ active, closeModal }) => {
  return (
    <>
      {active && (
        <ContactModalStyled>
          <div className='modal-mask' />
          <div className='modal'>
            <Button type='submit' color='primary' handleClick={closeModal}>
              Fermer
            </Button>
            <div className='modal-form'>
              <form>
                <input type='text' placeholder='Nom...' autoComplete='off' />
                <input
                  type='email'
                  placeholder='Adresse Email...'
                  autoComplete='off'
                />

                <textarea
                  className='modal-text'
                  cols='30'
                  rows='10'
                  placeholder='Message...'
                ></textarea>

                <Button type='submit' color='primary'>
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </ContactModalStyled>
      )}
    </>
  );
};

ContactModal.propTypes = {
  active: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ContactModal;
