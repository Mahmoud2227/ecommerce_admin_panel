import React from "react";
import {Paper, Typography} from "@mui/material";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const Chart = ({title, data, dataKey, grid}) => {
	return (
		<Paper elevation={1} sx={{padding: 3, marginBlock: 3}}>
			<Typography variant='h4'>{title}</Typography>
			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke='#8884d8' />
					<Line type='monotone' dataKey={dataKey} stroke='#8884d8' activeDot={{r: 8}} />
					<Tooltip />
					{grid && <CartesianGrid strokeDasharray='5 5' />}
				</LineChart>
			</ResponsiveContainer>
		</Paper>
	);
};

export default Chart;
