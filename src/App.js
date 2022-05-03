import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import { CssBaseline, Box, Toolbar } from "@mui/material";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";

function App() {
    return (
        <Router>
            <CssBaseline />
            <Topbar />
            <Toolbar />
            <Box display="flex">
                <SideBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/users" element={<UserList />} />
                    <Route exact path="/users/:id" element={<User />} />
                    <Route exact path="/newUser" element={<NewUser />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
