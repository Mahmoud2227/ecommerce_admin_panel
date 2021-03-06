import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    PhotoCamera,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Grid,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const User = () => {
    return (
        <Box p={2} width="100%">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h3" fontWeight="bold">
                    User
                </Typography>
                <Button variant="contained" href="/newUser">
                    Create
                </Button>
            </Box>
            <Grid container spacing={4}>
                <Grid item md={4} flexGrow={1}>
                    <Paper sx={{ p: 2 }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Avatar>U</Avatar>
                            <Box>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    User Name
                                </Typography>
                                <Typography variant="subtitle1" fontWeight={300}>
                                    Software Engineer
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <List sx={{ "& li": { my: 2 } }}>
                                <Typography variant="subtitle2" my={1}>
                                    Account Details
                                </Typography>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                                        <PermIdentity />
                                    </ListItemIcon>
                                    <ListItemText primary="username214" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemText primary="10.12.1999" />
                                </ListItem>
                                <Typography variant="subtitle2" my={1}>
                                    Contact Details
                                </Typography>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                                        <PhoneAndroid />
                                    </ListItemIcon>
                                    <ListItemText primary="+1 123 456 67" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                                        <MailOutline />
                                    </ListItemIcon>
                                    <ListItemText primary="user214@gmail.com" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                                        <LocationSearching />
                                    </ListItemIcon>
                                    <ListItemText primary="New York | USA" />
                                </ListItem>
                            </List>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                        <Typography variant="h4">Edit</Typography>
                        <Box height="100%" display="flex" gap={20}>
                            <Box
                                component="form"
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                height="100%"
                                flex={1}
                            >
                                <TextField variant="standard" label="Username" />
                                <TextField variant="standard" label="Full Name" />
                                <TextField variant="standard" label="Email" />
                                <TextField variant="standard" label="Phone" />
                                <TextField variant="standard" label="Address" />
                            </Box>
                            <Box
                                flex={1}
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-end"
                                justifyContent="space-between"
                            >
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Box
                                        component="img"
                                        src="https://via.placeholder.com/150"
                                        alt="user avatar image"
                                        title="user avatar image"
                                    />
                                    <label htmlFor="icon-button-file">
                                        <Input
                                            accept="image/*"
                                            id="icon-button-file"
                                            type="file"
                                            sx={{ display: "none" }}
                                        />
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Box>
                                <Button variant="contained" sx={{ px: 9 }}>
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default User;
