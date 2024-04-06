import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 7.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1%) 0%,
    rgba(47, 47, 47, 1) 100%
  );

  p {
    width: 15rem;
    height: 3.2rem;
    img {
      width: 100%;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #ffffff;
  }
  h2{
    color: #ffffff;
  }

  input {
    width: 23.2rem;
    height: 4rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 15%);
    color: rgba(211, 211, 211, 1);
    font-size: 1.6rem;
  }
  button{
    color: #ffffff;
  }

`;
