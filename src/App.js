import Topbar from "./components/Topbar/Topbar";
import {CssBaseline, Grid, Toolbar} from "@material-ui/core";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<>
			<CssBaseline />
			<Topbar />
			<Toolbar />
			<Grid container style={{height: "Calc(100vh - 64px)"}}>
				<SideBar />
			</Grid>
		</>
	);
}

export default App;
