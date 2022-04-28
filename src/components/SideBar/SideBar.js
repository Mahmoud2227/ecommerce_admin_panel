import React from "react";
import {Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography} from "@material-ui/core";
import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	Email,
	LineStyle,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from "@material-ui/icons";

const SideBar = () => {
	return (
		<Grid item md={2} style={{background: "rgb(251, 251, 255)", padding: "15px 10px 0 "}}>
			<Typography variant='subtitle1'>Dashboard</Typography>
			<MenuList dense>
				<MenuItem>
					<ListItemIcon>
						<LineStyle />
					</ListItemIcon>
					<ListItemText>Home</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Timeline />
					</ListItemIcon>
					<ListItemText>Analytics</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<TrendingUp />
					</ListItemIcon>
					<ListItemText>Sales</ListItemText>
				</MenuItem>
			</MenuList>
			<Typography variant='subtitle1'>Quick Menu</Typography>
			<MenuList dense>
				<MenuItem>
					<ListItemIcon>
						<PermIdentity />
					</ListItemIcon>
					<ListItemText>Users</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Storefront />
					</ListItemIcon>
					<ListItemText>Products</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<AttachMoney />
					</ListItemIcon>
					<ListItemText>Transactions</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<BarChart />
					</ListItemIcon>
					<ListItemText>Reports</ListItemText>
				</MenuItem>
			</MenuList>
			<Typography variant='subtitle1'>Notifications</Typography>
			<MenuList dense>
				<MenuItem>
					<ListItemIcon>
						<Email />
					</ListItemIcon>
					<ListItemText>Mail</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<DynamicFeed />
					</ListItemIcon>
					<ListItemText>Feedback</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<ChatBubbleOutline />
					</ListItemIcon>
					<ListItemText>Messages</ListItemText>
				</MenuItem>
			</MenuList>
			<Typography variant='subtitle1'>Staff</Typography>
			<MenuList>
				<MenuItem>
					<ListItemIcon>
						<WorkOutline />
					</ListItemIcon>
					<ListItemText>Manage</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Timeline />
					</ListItemIcon>
					<ListItemText>Analytics</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Report />
					</ListItemIcon>
					<ListItemText>Reports</ListItemText>
				</MenuItem>
			</MenuList>
		</Grid>
	);
};

export default SideBar;
