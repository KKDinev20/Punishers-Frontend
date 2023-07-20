import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Icon } from '../../pages/SignUp/SignUp.elements';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const isLoggedIn = true; // Set this value based on the user's login status

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
        <Icon to='/'>Punishers</Icon>
          <NavbarContainer>
            <NavLogo to='/'  onClick={closeMobileMenu}>
              <link rel="icon" href="%PUBLIC_URL%/icon.ico" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              {isLoggedIn ? (
                <>
                  <NavItem>
                    <NavLinks to='/resume' onClick={closeMobileMenu}>
                      Resume
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/cv' onClick={closeMobileMenu}>
                      CV
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/about-us' onClick={closeMobileMenu}>
                      About Us
                    </NavLinks>
                  </NavItem>
                </>
              ) : null}
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/signup'>
                    <Button primary>Get started</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/signup'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Get started
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

