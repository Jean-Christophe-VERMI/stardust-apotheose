import styled from 'styled-components';

export const TermesStyled = styled.div`



  background-color: ${props => props.theme.colors.darkBlue};
  text-align:left;
  font-family: Georgia, serif;
  padding-left:1rem;
  width:auto;
  font-size: 1.2rem;
  


h1 {
      color: white;
      text-align: center;
      padding-top:12rem;
      text-transform:uppercase;
      font-size: 3rem;
      padding-bottom:3rem;
    }


    p{
      color: white;

    }


h2 {  
      color: white;
      font-size:2rem;
      padding:2rem;
      text-align:center;
}
button{
  color:green;
  position: fixed; 
  text-transform:uppercase;
  font-weight:bold;
  border-radius: 2px solid black;
}

`;


export default TermesStyled;
