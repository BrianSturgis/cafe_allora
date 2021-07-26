import React from 'react'
import { SideBarContainer,Icon,CloseIcon,SideBarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SideBarRoute} from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon/>
			</Icon>
			<SideBarWrapper>
				<SidebarMenu>
					<SidebarLink to="home" isOpen={isOpen} onClick={toggle}>Home</SidebarLink>
					<SidebarLink to="menu"isOpen={isOpen} onClick={toggle}>Menu</SidebarLink>
					<SidebarLink to="about"isOpen={isOpen} onClick={toggle}>About</SidebarLink>
					<SidebarLink to="instagram"isOpen={isOpen} onClick={toggle}>Instagram</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SideBarRoute to="/signin"isOpen={isOpen} onClick={toggle}>Sign In</SideBarRoute>
				</SideBtnWrap>
			</SideBarWrapper>
		</SideBarContainer>
	)
}

export default Sidebar;
