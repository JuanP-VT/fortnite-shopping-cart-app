import styled from "styled-components";
import { Link } from "react-router-dom";

type Nav = {
  currentRoute: string;
};

export const NavWrap = styled.div<Nav>`
  display: flex;
  width: 100%;
  padding: 10px;
  position: fixed;
  height: 50px;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .links {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 40px;
    font-size: 20px;
    text-align: center;
    // This will change the border of the link depending on the current route
    .homeLink {
      border-bottom: ${(props) =>
        props.currentRoute === "/"
          ? "4px solid blue"
          : "4px solid transparent"};
    }
    .shopLink {
      border-bottom: ${(props) =>
        props.currentRoute === "/shop"
          ? "4px solid blue"
          : "4px solid transparent"};
    }
    .cartLink {
      border-bottom: ${(props) =>
        props.currentRoute === "/cart"
          ? "4px solid blue"
          : "4px solid transparent"};
    }
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Luckiest Guy", cursive;
  color: black;
  border-bottom: 4px solid transparent;
`;
