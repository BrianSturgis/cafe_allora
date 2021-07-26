import React from 'react'
import { SideBarContainer,Icon,CloseIcon } from './SidebarElements';
const Sidebar = () => {
	return (
		<SideBarContainer>
			<Icon>
				<CloseIcon/>
			</Icon>
			<SideBarWrapper>
				SidebarMenu
			</SideBarWrapper>
		</SideBarContainer>
	)
}

export default Sidebar;
