import {Grid} from "@material-ui/core";
import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

const Home = () => {
	return (
		<Grid item md={8}>
			<FeaturedInfo />
		</Grid>
	);
};

export default Home;
