import {Box, Grid} from "@mui/material";
import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";

import {userData} from "../../dummyData";

const Home = () => {
	return (
		<Box flexGrow={1} ml={4} sx={{padding: "40px 20px 20px 0"}}>
			<FeaturedInfo />
			<Chart title='User Analytics' grid dataKey='Active User' data={userData} />
			<Grid container spacing={4}>
				<WidgetSm />
				<WidgetLg />
			</Grid>
		</Box>
	);
};

export default Home;
