import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#consultancy">CONSULTANCY</AnchorLink>
      <AnchorLink href="#about">ABOUT</AnchorLink>
      <AnchorLink striphash="true" href="#projects">PROJECTS</AnchorLink>
      <AnchorLink href="#contact">CONTACT</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
