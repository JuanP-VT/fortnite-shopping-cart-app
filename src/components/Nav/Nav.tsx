import React, { useEffect } from "react";
import { NavWrap, StyledLink } from "./Nav.Style";
type Props = {
  currentRoute: string;
};

function Nav({ currentRoute }: Props) {
  //This hook will re render the component when the current route changes

  useEffect(() => {}, [currentRoute]);
  return (
    <NavWrap currentRoute={currentRoute}>
      <div className="links">
        <StyledLink className="homeLink" to="/">
          Home
        </StyledLink>
        <StyledLink className="shopLink" to="/shop">
          Shop
        </StyledLink>
        <StyledLink className="cartLink" to="/cart">
          Cart
        </StyledLink>
      </div>
    </NavWrap>
  );
}

export default Nav;
