import {Grid} from "@material-ui/core";
import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import {userData} from "../../dummyData";

const Home = () => {
	return (
		<Grid item md={10} style={{padding: "40px"}}>
			<FeaturedInfo />
			<Chart title='User Analytics' grid dataKey='Active User' data={userData} />
		</Grid>
	);
};

export default Home;
