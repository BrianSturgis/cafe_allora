import React from 'react'
import {Nav,NavbarContainer,NavLogo} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Allora</NavLogo>
					<MobileIcon>
						<FaBars/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="about"
					
							
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
