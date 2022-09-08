import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  .links {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 40px;
    //This will highlight the link depending on the current route
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Luckiest Guy", cursive;
  color: black;
  border-bottom: 4px solid transparent;
`;
