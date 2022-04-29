import {Box, Grid, Paper, Typography} from "@material-ui/core/";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

const FeaturedInfo = () => {
	return (
		<Grid container style={{gap: "20px", padding: "20px"}}>
			<Grid item style={{flexGrow: 1}}>
				<Paper style={{padding: "20px"}} elevation={1}>
					<Typography variant='h5'>Revanue</Typography>
					<Box display='flex' alignItems='center' marginY={1}>
						<Typography variant='h4' style={{marginRight: "20px"}}>
							$2,415
						</Typography>
						<Typography>-11.4</Typography>
						<ArrowDownward color='error' />
					</Box>
					<Typography variant='body1'>Compared to last month</Typography>
				</Paper>
			</Grid>
			<Grid item style={{flexGrow: 1}}>
				<Paper style={{padding: "20px"}} elevation={1}>
					<Typography variant='h5'>Sales</Typography>
					<Box display='flex' alignItems='center' marginY={1}>
						<Typography variant='h4' style={{marginRight: "20px"}}>
							$4,415
						</Typography>
						<Typography>-1.4</Typography>
						<ArrowDownward color='error' />
					</Box>
					<Typography variant='body1'>Compared to last month</Typography>
				</Paper>
			</Grid>
			<Grid item style={{flexGrow: 1}}>
				<Paper style={{padding: "20px"}} elevation={1}>
					<Typography variant='h5'>Cost</Typography>
					<Box display='flex' alignItems='center' marginY={1}>
						<Typography variant='h4' style={{marginRight: "20px"}}>
							$2,225
						</Typography>
						<Typography>+2.4</Typography>
						<ArrowUpward htmlColor='#66bb6a' />
					</Box>
					<Typography variant='body1'>Compared to last month</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default FeaturedInfo;
