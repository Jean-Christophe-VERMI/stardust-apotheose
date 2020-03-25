import styled from 'styled-components';
import cosmos from './background-images/cosmos-3.jpg';

const HomePageStyled = styled.header`

  min-height: 100vh;
  background-image: url(${cosmos});
  background-position: center;
  background-size: cover;
  margin-top: -65px;
  

  .header{
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  .title{
    color: white;
    font-weight: bold;
    font-size: 5rem;
  }

`;

export default HomePageStyled;
