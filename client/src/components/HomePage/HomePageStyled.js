import styled from 'styled-components';
import cosmos from './background-images/cosmos-3.jpg';

const HomePageStyled = styled.header`
  .header {
    background-color: rgba(0, 0, 0, 0.3);
    background-image: url(${cosmos});
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: white;
    font-weight: bold;
    font-size: 12rem;
    font-family: ${props => props.theme.fonts.headings};
  }
`;

export default HomePageStyled;
