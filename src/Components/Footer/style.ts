import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;

  h1 {
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 400;
    color: #4f4f4f;
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    color: #4f4f4f;
    cursor: pointer;
  }

  .divMain {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
    border-bottom: 1px solid #b0b0b0;
    padding: 4rem 0;

    .divLogo {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      .divSocial {
        display: flex;
        flex-direction: row;
        gap: 3rem;

        svg {
          color: #4f4f4f;
        }
      }
    }

    .divTypography {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .divPayment {
      display: flex;
      flex-direction: column;

      .divPaymentMethods {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        padding-bottom: 5rem;
        padding-top: 1rem;

        .imgPayment {
          width: 3.4rem;
          height: 2.4rem;
          cursor: pointer;
        }
        .imgPaymentMaster {
          width: 3.4rem;
          height: 2.4rem;
          border: 1.5px solid #d9d9d9;
          border-radius: 16%;
          cursor: pointer;
        }
      }

      .divSecurity {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        padding-top: 1rem;

        .imgSecurity {
          cursor: pointer;
        }
      }
    }
  }

  .divFooter {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    text-align: center;
    gap: 2rem;

    .typography {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.8rem;
      color: #4f4f4f;
    }
  }
`;
