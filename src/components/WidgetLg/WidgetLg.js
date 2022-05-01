import React from "react";
import {
	Avatar,
	Box,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
	Chip,
} from "@mui/material";

import {grey, teal, red, lightBlue} from "@mui/material/colors";

const WidgetLg = () => {
	return (
		<Grid item md={8}>
			<Paper elevation={1} sx={{py: 3, px: 2}}>
				<Typography variant='h5' sx={{border: 0}} fontWeight='bold'>
					Latest transactions
				</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Customer</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Amount</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>
								<Box display='flex' alignItems='center' gap={1}>
									<Avatar>U</Avatar>
									<Typography variant='subtitle1' fontWeight={500}>
										User
									</Typography>
								</Box>
							</TableCell>
							<TableCell sx={{color: grey[500]}}>2 Jun 2021</TableCell>
							<TableCell sx={{color: grey[500]}}>$122.00</TableCell>
							<TableCell>
								<Chip label='Approved' sx={{backgroundColor: teal["A100"]}} />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Box display='flex' alignItems='center' gap={1}>
									<Avatar>U</Avatar>
									<Typography variant='subtitle1' fontWeight={500}>
										User
									</Typography>
								</Box>
							</TableCell>
							<TableCell sx={{color: grey[500]}}>2 Jun 2021</TableCell>
							<TableCell sx={{color: grey[500]}}>$122.00</TableCell>
							<TableCell>
								<Chip label='Pending' sx={{backgroundColor: lightBlue["A100"]}} />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Box display='flex' alignItems='center' gap={1}>
									<Avatar>U</Avatar>
									<Typography variant='subtitle1' fontWeight={500}>
										User
									</Typography>
								</Box>
							</TableCell>
							<TableCell sx={{color: grey[500]}}>2 Jun 2021</TableCell>
							<TableCell sx={{color: grey[500]}}>$122.00</TableCell>
							<TableCell>
								<Chip label='Declined' sx={{backgroundColor: red["A100"]}} />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Box display='flex' alignItems='center' gap={1}>
									<Avatar>U</Avatar>
									<Typography variant='subtitle1' fontWeight={500}>
										User
									</Typography>
								</Box>
							</TableCell>
							<TableCell sx={{color: grey[500]}}>2 Jun 2021</TableCell>
							<TableCell sx={{color: grey[500]}}>$122.00</TableCell>
							<TableCell>
								<Chip label='Approved' sx={{backgroundColor: teal["A100"]}} />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</Grid>
	);
};

export default WidgetLg;
