import Topbar from "./components/Topbar/Topbar";
import {CssBaseline, Box, Toolbar} from "@mui/material";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<CssBaseline />
			<Topbar />
			<Toolbar />
			<Box display='flex' gap={4}>
				<SideBar />
				<Home />
			</Box>
		</>
	);
}

export default App;
