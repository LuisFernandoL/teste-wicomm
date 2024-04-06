import styled from "styled-components";

export const SectionCategory = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8rem;
  margin-bottom: 8rem;
  margin-top: -1rem;

  .divPagament {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 11.2rem;
    align-items: center;
    background-color: rgba(245, 245, 245, 1);

    img {
      height: 4.8rem;
    }
  }
  .divCategorys {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 3.2rem;
      color: rgba(79, 79, 79, 1);
    }

    .divImgCategorys {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;


      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        h3 {
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 2.2rem;
          color: rgba(79, 79, 79, 1);
          cursor: pointer;
        }
      }
    }
  }
`;
