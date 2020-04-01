import styled from 'styled-components';

const ContactModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.darkBlue};

  .modal {
    border-radius: ${props => props.theme.sizings.medium};
    background: ${props => props.theme.colors.white};
    width: 50%;
    z-index: 40;
    text-align: center;
    padding-bottom: ${props => props.theme.sizings.medium};
    padding-right: ${props => props.theme.sizings.medium};
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
    margin-left: ${props => props.theme.sizings.larger};
    display: block;
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.fontSizes.default};
    border: 1px solid ${props => props.theme.colors.darkBlue};
    border-radius: ${props => props.theme.radius.medium};
    margin: ${props => props.theme.sizings.medium} 0;
  }

  .modal-form {
    display: block;
    width: 60%;
    margin: 0 auto;
  }

  input,
  textarea {
    width: 100%;

    &:hover {
      border: 1px solid ${props => props.theme.colors.linkDark};
    }
  }

  input {
    display: block;
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.fontSizes.default};
    border: 1px solid ${props => props.theme.colors.darkBlue};
    border-radius: ${props => props.theme.radius.medium};
    margin: ${props => props.theme.sizings.medium} 0;
  }

  p {
    padding: ${props => props.theme.sizings.small};
    font-size: 0.8rem;
  }
`;

export default ContactModalStyled;
