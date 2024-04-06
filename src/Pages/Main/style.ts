import styled from "styled-components";

export const SectionHomeinitial = styled.section`
  width: 100%;
  .divMain {
    width: 100%;
    object-fit: cover;
    .imgBackground {
      width: 50%;
    }
    .divSandal {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: -70rem;
      width: 100%;
      align-items: center;

      .imgCheck {
        width: 25%;
      }

      button{
        width: 15.6rem;
        height: 4.8rem;
        background-color: #CF215B;
        color: #FFFFFF;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2rem;
        position: absolute;
        margin-top: 25.5%;
      }

      .divText {
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 6.4rem;
        align-items: center;
        background-color: #ffffff;
        padding: 2rem;

        h1 {
          font-size: 2.4rem;
          font-weight: 400;
          line-height: 3.2rem;
          color: #4f4f4f;
        }

        h2 {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 3.2rem;
          color: #2C0713;
          span {
            padding-left: 0.5rem;
            font-size: 2.4rem;
            font-weight: 300.2rem;
            line-height: 3.2rem;
            color: #CF215B;
          }
        }
      }
    }
  }
`;
