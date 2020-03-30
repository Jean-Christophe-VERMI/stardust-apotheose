import styled from 'styled-components';

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    border-radius: 1rem;
    background: white;
    border: 1px solid #2d3436;
    width: 50%;
    z-index: 40;
    padding-bottom: 1rem;
    padding-right: 1rem;
  }

  .modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  .modal-text {
    margin-left: 3rem;
  }

  p {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  button {
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #2d3436;
  }
`;

export default ModalStyled;
