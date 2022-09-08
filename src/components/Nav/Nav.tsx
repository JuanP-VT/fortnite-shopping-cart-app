import React, { useEffect } from "react";
import { NavWrap } from "./Nav.Style";
type Props = {
  currentRoute: string;
};

function Nav({ currentRoute }: Props) {
  //This hook will re render the component when the current route changes

  useEffect(() => {}, [currentRoute]);
  return <NavWrap></NavWrap>;
}

export default Nav;
