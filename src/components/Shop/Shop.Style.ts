import styled from "styled-components";

export const ShopWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  #catalogContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 200px;
    padding-top: 20px;
    .itemCard {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      width: 300px;
      height: 440px;
      .imgContainer {
        height: 70%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: contain;
          object-position: center;
        }
      }
      .descBox {
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 24px;
          white-space: nowrap;
        }
        p {
          font-size: 16px;
          font-style: italic;
          text-align: center;
          margin-top: 5px;
        }
        .itemPrice {
          //
        }
      }
    }
    .cartBox {
      display: flex;
      height: 10%;
      justify-content: center;
      button {
        height: 30px;
        width: 100px;
        border-radius: 10px;
        outline: none;
      }
    }
  }
`;
