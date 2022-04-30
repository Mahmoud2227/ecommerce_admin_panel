import Topbar from "./components/Topbar/Topbar";
import {CssBaseline, Grid, Toolbar} from "@mui/material";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<CssBaseline />
			<Topbar />
			<Toolbar />
			<Grid container justifyContent='space-between' sx={{height: "Calc(100vh - 64px)"}}>
				<SideBar />
				<Home />
			</Grid>
		</>
	);
}

export default App;
