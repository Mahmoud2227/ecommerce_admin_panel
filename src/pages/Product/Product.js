import React, { useState } from "react";
import {
    Box,
    Button,
    Paper,
    Typography,
    Avatar,
    List,
    ListItem,
    IconButton,
    Input,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { PhotoCamera } from "@mui/icons-material";

const Product = () => {
    const [active, setActive] = useState("");
    const [inStock, setInStock] = useState("");

    return (
        <Box p={2} width="100%">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h3" fontWeight="bold">
                    Product
                </Typography>
                <Button variant="contained" href="/newProduct">
                    Create
                </Button>
            </Box>
            <Box display="flex" gap={6}>
                <Box flex={1} height="100%">
                    <Chart title="Sales performance" grid dataKey="Sales" data={productData} />
                </Box>
                <Paper sx={{ p: 2, flex: 1 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Avatar>P</Avatar>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Lenovo Y520
                        </Typography>
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <Typography variant="subtitle1" fontWeight="bold" mr={4}>
                                id:
                            </Typography>
                            <Typography variant="subtitle1">123</Typography>
                        </ListItem>
                        <ListItem disablePadding>
                            <Typography variant="subtitle1" fontWeight="bold" mr={4}>
                                sales:
                            </Typography>
                            <Typography variant="subtitle1">5123</Typography>
                        </ListItem>
                        <ListItem disablePadding>
                            <Typography variant="subtitle1" fontWeight="bold" mr={4}>
                                active:
                            </Typography>
                            <Typography variant="subtitle1">yes</Typography>
                        </ListItem>
                        <ListItem disablePadding>
                            <Typography variant="subtitle1" fontWeight="bold" mr={4}>
                                in stock:
                            </Typography>
                            <Typography variant="subtitle1">no</Typography>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
            <Paper sx={{ p: 2, mt: 2 }}>
                <Box height="100%" display="flex" gap={20}>
                    <Box
                        component="form"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                        maxWidth="300px"
                        flex={1}
                        gap={4}
                    >
                        <TextField variant="standard" label="Product Name" />
                        <FormControl>
                            <InputLabel id="active-label">In Stock</InputLabel>
                            <Select
                                labelId="inStock-label"
                                value={inStock}
                                onChange={(e) => setInStock(e.target.value)}
                                label="In Stock"
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 130 }}>
                            <InputLabel id="active-label">Active</InputLabel>
                            <Select
                                labelId="active-label"
                                value={active}
                                onChange={(e) => setActive(e.target.value)}
                                label="Active"
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                        justifyContent="space-between"
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <Box
                                component="img"
                                src="https://via.placeholder.com/150"
                                alt="user avatar image"
                                title="user avatar image"
                            />
                            <label htmlFor="icon-button-file">
                                <Input
                                    accept="image/*"
                                    id="icon-button-file"
                                    type="file"
                                    sx={{ display: "none" }}
                                />
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                >
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Box>
                        <Button variant="contained" sx={{ px: 9 }}>
                            Update
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Product;
