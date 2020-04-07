import styled from 'styled-components';

const CommentStyled = styled.div`

  margin: .5rem;
  padding: .5rem;

  @media screen and (max-width : 650px) {
    margin-top: 1rem;
    margin: 0rem;
    padding: 0rem;

  }

    p {
      text-align: right;
      font-size: .8rem;
    }

  .infos-comment{
    text-align: right;
    font-style: italic;
    color: black;
    font-size: .8rem;
  }

`;

export default CommentStyled;
