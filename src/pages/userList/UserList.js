import {useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {Edit, Delete} from "@mui/icons-material";
import {Avatar, Box, Button, Typography} from "@mui/material";

import {userRows} from "../../dummyData";

const UserList = () => {
	const [data, setData] = useState(userRows);

	const userColumns = [
		{field: "id", headerName: "ID", width: 100},
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => (
				<Box display='flex' alignItems='center' gap={1}>
					<Avatar>U</Avatar>
					<Typography variant='subtitle1'>{params.row.username}</Typography>
				</Box>
			),
		},
		{field: "email", headerName: "Email", width: 150},
		{field: "status", headerName: "Status", width: 120},
		{field: "transaction", headerName: "Transaction", width: 160},
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => (
				<Box display='flex'>
					<Button startIcon={<Edit />} href={"/users/" + params.row.id}>
						Edit
					</Button>
					<Button startIcon={<Delete />} onClick={() => handleDelete(params.row.id)}>
						Delete
					</Button>
				</Box>
			),
		},
	];

	const handleDelete = (id) => {
		setData((prevState) => {
			return prevState.filter((row) => row.id !== id);
		});
	};

	return (
		<div style={{height: "calc(100vh - 64px)", width: "100%", display: "flex"}}>
			<div style={{flexGrow: 1}}>
				<DataGrid
					rows={data}
					columns={userColumns}
					disableSelectionOnClick
					checkboxSelection
					autoPageSize
				/>
			</div>
		</div>
	);
};

export default UserList;
