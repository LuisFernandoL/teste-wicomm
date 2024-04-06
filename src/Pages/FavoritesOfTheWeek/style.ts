import styled from "styled-components";

export const SectionFavoritesOfTheWeek = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8rem;

  .islide-item {
    width: 350px;
    height: 150px;
    object-fit: cover;
  }

  .divTitle {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    h2 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 400;
      color: rgba(79, 79, 79, 1);
    }
  }
  img {
    cursor: pointer;
  }
  .divProducts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .divImgDiscount {
      h4 {
        flex-direction: column;
        display: flex;
        width: 6.5rem;
        height: 2.4rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2rem;
        background-color: #cf215b;
        color: #ffffff;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin-top: -27rem;
        margin-left: 1rem;
      }

      .btnToCar {
        width: 27.7rem;
        height: 3.2rem;
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin-left: -10rem;
        background-color: #cf215b;
        color: #ffffff;
        position: absolute;
        margin-top: 24.5rem;
        margin-left: -27.7rem;
      }

      .divSize {
        display: flex;
        flex-direction: row;
        position: absolute;
        width: 27.7rem;
        height: 6.8rem;
        justify-content: space-around;
        margin-top: -10.4rem;
        backdrop-filter: blur(5px);
        border-top: 1px solid #d3d3d3;

        .sizeAndTypograph {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        }

        h1 {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.5rem;
        }
        .spanSize {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          gap: 2rem;

          h6 {
            cursor: pointer;
            width: 2.8rem;
            height: 2.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 1.6rem;
            font-weight: 400;
            color: #4f4f4f;
            background-color: #ffffff;
          }
        }
      }

      .btnHeart {
        position: absolute;
        margin-top: 1rem;
        margin-left: -3rem;
      }
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: rgba(79, 79, 79, 1);
      padding-bottom: 1.5rem;
      padding-top: 1rem;
    }
    p {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      h2 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.2rem;
        color: rgba(79, 79, 79, 1);
        span {
          text-decoration: line-through;
        }
      }
    }
  }
`;
