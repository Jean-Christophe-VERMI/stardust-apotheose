import styled from 'styled-components';

const FooterStyled = styled.div`
  position: fixed;
  height: auto;
  width: 100%;
  flex-direction: row;
  background-color: ${props => props.theme.colors.darkBlue};

  .footer {
    color: ${props => props.theme.colors.white};
  }

  .mentions,
  .termes {
    display: block;
    text-align: right;
    align-items: right;
    justify-content: space-between;
    padding: ${props => props.theme.sizings.medium};

    &:hover {
      color: ${props => props.theme.colors.linkDark};
    }
  }
`;

export default FooterStyled;
