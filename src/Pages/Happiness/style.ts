import styled from "styled-components";

export const SectionHappiness = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: rgba(245, 245, 245, 1);
  height: 45.6rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      width: 40rem;
      align-items: flex-start;
      justify-content: start;
      gap: 2rem;
      p {
        h2 {
          font-size: 2rem;
          font-weight: 400;
          line-height: 2.6rem;
          color: rgba(79, 79, 79, 1);
          display: flex;
          align-items: center;
          justify-content: start;
          padding-bottom: 4rem;
        }
        h3 {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.5rem;
          width: 27.3rem;
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4.8rem;
        width: 15.6rem;
        background-color:rgba(207, 33, 91, 1) ;
        color: rgba(255, 255, 255, 1);
        font-size: 1.6rem;
        line-height: 2.0rem;
        font-weight: 400;
      }
    }
  }
`;
