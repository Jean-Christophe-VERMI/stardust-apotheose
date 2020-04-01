import styled from 'styled-components';
import cosmos from './background-images/cosmos-3.jpg';

const HomePageStyled = styled.header`
  min-height: 100vh;
  background-image: url(${cosmos});
  background-position: center;
  background-size: cover;

  .header {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: white;
    font-weight: bold;
    font-size: 10rem;
    font-family: ${props => props.theme.fonts.headings};
  }
  p{
    font-size:2rem;
    color:red;
    font-family: ${props => props.theme.fonts.headings};
    text-transform:uppercase;

  }
`;

export default HomePageStyled;
