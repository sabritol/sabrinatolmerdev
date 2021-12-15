import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}  theme={theme} >
      <Brand as={Link} to="/">
        SABRINA TOLMER
      </Brand>
      <NavbarLinks desktop theme={theme} />
    </Wrapper>
  );
};

export default Navbar;
