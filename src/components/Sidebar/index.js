import React from 'react'
import { SideBarContainer,Icon,CloseIcon } from './SidebarElements';
const Sidebar = () => {
	return (
		<SideBarContainer>
			<Icon>
				<CloseIcon/>
			</Icon>
			<SideBarWrapper>
				<SidebarMenu>
					<SidebarLink to="home">
						Home
					</SidebarLink>
					<SidebarLink to="menu">
						Menu
					</SidebarLink>
					<SidebarLink to="about">
						About
					</SidebarLink>
					<SidebarLink to="home">
						Home
					</SidebarLink>
				</SidebarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	)
}

export default Sidebar;
