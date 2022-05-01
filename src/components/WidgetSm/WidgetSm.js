import {
	Avatar,
	Button,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import {Visibility} from "@mui/icons-material";
import React from "react";

const WidgetSm = () => {
	return (
		<Grid item md={4}>
			<Paper sx={{pt: 3, height: "100%"}} elevation={1}>
				<Typography variant='h5' px={2} fontWeight='bold'>
					New Join Members
				</Typography>
				<List>
					<ListItem>
						<ListItemAvatar>
							<Avatar>U</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Mahmoud Salah' secondary='Front-end Developer' />
						<Button
							variant='outlined'
							sx={{backgroundColor: "#eeeef7", textTransform: "none"}}
							startIcon={<Visibility />}>
							Display
						</Button>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>U</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Mahmoud Salah' secondary='Front-end Developer' />
						<Button
							variant='outlined'
							sx={{backgroundColor: "#eeeef7", textTransform: "none"}}
							startIcon={<Visibility />}>
							Display
						</Button>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>U</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Mahmoud Salah' secondary='Front-end Developer' />
						<Button
							variant='outlined'
							sx={{backgroundColor: "#eeeef7", textTransform: "none"}}
							startIcon={<Visibility />}>
							Display
						</Button>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>U</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Mahmoud Salah' secondary='Front-end Developer' />
						<Button
							variant='outlined'
							sx={{backgroundColor: "#eeeef7", textTransform: "none"}}
							startIcon={<Visibility />}>
							Display
						</Button>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>U</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Mahmoud Salah' secondary='Front-end Developer' />
						<Button
							variant='outlined'
							sx={{backgroundColor: "#eeeef7", textTransform: "none"}}
							startIcon={<Visibility />}>
							Display
						</Button>
					</ListItem>
				</List>
			</Paper>
		</Grid>
	);
};

export default WidgetSm;
