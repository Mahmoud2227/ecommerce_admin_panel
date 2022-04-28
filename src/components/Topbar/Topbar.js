import {useState} from "react";
import {AppBar, Container, Toolbar, Typography, IconButton, Badge, Avatar} from "@material-ui/core";

import {Language, Notifications, Settings} from "@material-ui/icons";

const Topbar = () => {
	return (
		<>
			<AppBar>
				<Container maxWidth='xl'>
					<Toolbar variant='regular'>
						<Typography>Logo</Typography>
						<div style={{flex: 1}} />
						<IconButton style={{color: "white"}}>
							<Badge badgeContent={1} color='secondary' overlap='rectangular'>
								<Notifications />
							</Badge>
						</IconButton>
						<IconButton style={{color: "white"}}>
							<Language />
						</IconButton>
						<IconButton style={{color: "white"}}>
							<Settings />
						</IconButton>
						<Avatar>M</Avatar>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Topbar;
