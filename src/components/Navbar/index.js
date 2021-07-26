import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} from './NavbarElements';


const Navbar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Cafe Allora</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="home">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="menu">Menu</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="instagram">Instagram</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/signin">sign in</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
