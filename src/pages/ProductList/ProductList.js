import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";

import { productRows } from "../../dummyData";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const userColumns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => (
                <Box display="flex" alignItems="center" gap={1}>
                    <Avatar>P</Avatar>
                    <Typography variant="subtitle1">{params.row.productName}</Typography>
                </Box>
            ),
        },
        { field: "stock", headerName: "Stock", width: 150 },
        { field: "status", headerName: "Status", width: 120 },
        { field: "price", headerName: "Price", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => (
                <Box display="flex">
                    <Button startIcon={<Edit />} href={"/products/" + params.row.id}>
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
        <div style={{ height: "calc(100vh - 64px)", width: "100%", display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
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

export default ProductList;
