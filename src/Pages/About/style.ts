import styled from "styled-components";

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8rem 0;

  .divAbout {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 50%;
      h2 {
        width: 100%;
        display: flex;
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 3.2rem;
        color: rgba(79, 79, 79, 1);
        text-align: start;
        padding-bottom: 2rem;
      }

      h3 {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2rem;
        color: rgba(79, 79, 79, 1);
      }
    }
  }

  .divImgAbout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    img {
      display: flex;
      width: 50%;
      box-shadow: 20px 20px 5px -1px #F5F5F5;
    }
  }
`;

export const DivStyleRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14.8rem;
  background-color: rgba(245, 245, 245, 1);
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: rgba(79, 79, 79, 1);
    span {
      color: rgba(207, 33, 91, 1);
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    input {
      width: 27.7rem;
      height: 4rem;
      border: 1px solid #00000073;
      color: #00000073;
      padding: 1rem;
      background-color: #ffffff;
    }
    button {
      width: 17.8rem;
      height: 4rem;
      align-items: center;
      justify-content: center;
      background-color: #cf215b;
      color: #ffffff;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.8rem;
    }
  }
`;
