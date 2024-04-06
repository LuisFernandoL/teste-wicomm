import styled from "styled-components";

export const SectionRasteirasBirkens = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 1);
  padding-bottom: 2rem;

  .divMain {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-top: 4rem;
    gap: 4rem;

    display: flex;
    flex-direction: row;
    .divContainer1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      p {
        width: 32rem;
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.6rem;
      color: rgba(79, 79, 79, 1);
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: rgba(79, 79, 79, 1);
    }

    .divButtonAndImg {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      padding-top: 2.5rem;

      .bntGo {
        width: 10.6rem;
        height: 2.4rem;
        font-size: 1.6rem;
        align-items: center;
        justify-content: space-between;
        display: flex;
        margin-bottom: 1rem;
        svg {
          height: 1.6rem;
          justify-content: center;
        }
      }
    }
    .divImg {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .divContainer2 {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      span {
        width: 22rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .textTenis {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.5rem;
          color: rgba(79, 79, 79, 1);
          text-align: center;
        }
      }
    }
  }
  .divButtons {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 4.8rem;
    align-items: center;
    justify-content: space-around;
    .divBtnSandal {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 50%;
      padding-right: 9rem;
      .btnSandal {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:18.8rem;
        height: 4.8rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2rem;
        color: rgba(79, 79, 79, 1);
        svg {
          height: 1.6rem;
          justify-content: center;
        }
      }
    }
    .divBtnConferir {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      .btnCheck {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:18.8rem;
        height: 4.8rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2rem;
        color: rgba(79, 79, 79, 1);
        svg {
          height: 1.6rem;
          justify-content: center;
        }
      }
    }
  }
`;
