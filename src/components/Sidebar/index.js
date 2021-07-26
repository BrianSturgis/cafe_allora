import React from 'react'
import { SideBarContainer,Icon,CloseIcon,SideBarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SideBarRoute} from './SidebarElements';
const Sidebar = () => {
	return (
		<SideBarContainer>
			<Icon>
				<CloseIcon/>
			</Icon>
			<SideBarWrapper>
				<SidebarMenu>
					<SidebarLink to="home">Home</SidebarLink>
					<SidebarLink to="menu">Menu</SidebarLink>
					<SidebarLink to="about">About</SidebarLink>
					<SidebarLink to="instagram">Instagram</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SideBarRoute to="/signin">Sign In</SideBarRoute>
				</SideBtnWrap>
			</SideBarWrapper>
		</SideBarContainer>
	)
}

export default Sidebar;
