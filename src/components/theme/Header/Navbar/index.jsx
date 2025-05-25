import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";
import { SocialLinks } from "../../../common";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} theme={theme}>
      <SocialLinks />

      <NavbarLinks desktop theme={theme} />
    </Wrapper>
  );
};

export default Navbar;
