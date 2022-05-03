import React from "react";
import {
    Box,
    Drawer,
    Grid,
    Link,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Toolbar,
    Typography,
} from "@mui/material";
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
} from "@mui/icons-material";

const SideBar = () => {
    return (
        <Grid item md={2} sx={{ background: "rgb(251, 251, 255)" }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
                }}
            >
                <Toolbar />
                <Box paddingLeft={2} paddingTop={2}>
                    <Typography variant="subtitle1">Dashboard</Typography>
                    <MenuList>
                        <MenuItem component="a" href="/">
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
                    <Typography variant="subtitle1">Quick Menu</Typography>
                    <MenuList>
                        <MenuItem component="a" href="/users">
                            <ListItemIcon>
                                <PermIdentity />
                            </ListItemIcon>
                            <ListItemText>Users</ListItemText>
                        </MenuItem>
                        <MenuItem component="a" href="/products">
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
                    <Typography variant="subtitle1">Notifications</Typography>
                    <MenuList>
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
                    <Typography variant="subtitle1">Staff</Typography>
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
                </Box>
            </Drawer>
        </Grid>
    );
};

export default SideBar;
