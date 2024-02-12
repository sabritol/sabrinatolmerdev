import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop, onClose }) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the Sidebar's Wrapper
    if (typeof onClose === "function") {
      // Check if onClose is a function before calling
      onClose(); // Close the sidebar
    }
  };
  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href='#consultancy' onClick={handleClick}>
        CONSULTANCY
      </AnchorLink>
      <br></br>
      <AnchorLink href='#about' onClick={handleClick}>
        ABOUT
      </AnchorLink>
      <br></br>
      <AnchorLink striphash='true' href='#projects' onClick={handleClick}>
        PROJECTS
      </AnchorLink>
      <br></br>
      <AnchorLink href='#contact' onClick={handleClick}>
        CONTACT
      </AnchorLink>
      <br></br>
      <br></br>
      <br></br>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
