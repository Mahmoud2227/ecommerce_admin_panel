import React from "react";
import {
    Box,
    Button,
    Paper,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";

const Product = () => {
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
                <Box flex={1}>
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
        </Box>
    );
};

export default Product;
