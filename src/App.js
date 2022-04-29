import Topbar from "./components/Topbar/Topbar";
import {CssBaseline, Grid, Toolbar} from "@material-ui/core";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<CssBaseline />
			<Topbar />
			<Toolbar />
			<Grid container justifyContent='space-between' style={{height: "Calc(100vh - 64px)"}}>
				<SideBar />
				<Home />
				<Grid item md={2}>
					Page
				</Grid>
			</Grid>
		</>
	);
}

export default App;
