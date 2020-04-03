import styled from 'styled-components';

const FooterStyled = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  background-color: red;
  display: inline-flex;
  margin-top: 85vh;
  padding-bottom: ${props => props.theme.sizings.small};

  .footer {
    color: ${props => props.theme.colors.white};
  }

  .mentions,
  .termes {
    padding: ${props => props.theme.sizings.medium};
    text-align: right;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: ${props => props.theme.colors.linkDark};
    }
  }
`;

export default FooterStyled;
