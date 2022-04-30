import {Box, Grid, Paper, Typography} from "@mui/material";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

const FeaturedInfo = () => {
	return (
		<Grid container sx={{gap: "50px"}}>
			<Grid item sx={{flexGrow: 1}}>
				<Paper sx={{padding: "20px"}} elevation={1}>
					<Typography variant='h5'>Revanue</Typography>
					<Box display='flex' alignItems='center' marginY={1}>
						<Typography variant='h4' sx={{marginRight: "20px"}}>
							$2,415
						</Typography>
						<Typography>-11.4</Typography>
						<ArrowDownward color='error' />
					</Box>
					<Typography variant='body1'>Compared to last month</Typography>
				</Paper>
			</Grid>
			<Grid item sx={{flexGrow: 1}}>
				<Paper sx={{padding: "20px"}} elevation={1}>
					<Typography variant='h5'>Sales</Typography>
					<Box display='flex' alignItems='center' marginY={1}>
						<Typography variant='h4' sx={{marginRight: "20px"}}>
							$4,415
						</Typography>
						<Typography>-1.4</Typography>
						<ArrowDownward color='error' />
					</Box>
					<Typography variant='body1'>Compared to last month</Typography>
				</Paper>
			</Grid>
			<Grid item sx={{flexGrow: 1}}>
				<Paper sx={{padding: "20px"}} elevation={1}>
					<Typography variant='h5'>Cost</Typography>
					<Box display='flex' alignItems='center' marginY={1}>
						<Typography variant='h4' sx={{marginRight: "20px"}}>
							$2,225
						</Typography>
						<Typography>+2.4</Typography>
						<ArrowUpward color='success' />
					</Box>
					<Typography variant='body1'>Compared to last month</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default FeaturedInfo;
