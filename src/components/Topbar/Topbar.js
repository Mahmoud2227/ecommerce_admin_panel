import {AppBar, Container, Toolbar, Typography, IconButton, Badge, Avatar} from "@mui/material";

import {Language, Notifications, Settings} from "@mui/icons-material";

const Topbar = () => {
	return (
		<AppBar sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
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
	);
};

export default Topbar;
