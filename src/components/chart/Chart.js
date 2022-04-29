import React from "react";
import {Paper, Typography} from "@material-ui/core";
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
		<Paper elevation={1} style={{padding: 20, marginTop: 20}}>
			<Typography variant='h4'>{title}</Typography>
			<ResponsiveContainer width='100%' aspect={3 / 1}>
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
