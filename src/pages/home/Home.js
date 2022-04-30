import {Grid} from "@mui/material";
import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/WidgetSm/WidgetSm";

import {userData} from "../../dummyData";

const Home = () => {
	return (
		<Grid item md={10} style={{padding: "40px 20px 20px 0"}}>
			<FeaturedInfo />
			<Chart title='User Analytics' grid dataKey='Active User' data={userData} />
			<Grid container>
				<WidgetSm />
			</Grid>
		</Grid>
	);
};

export default Home;
