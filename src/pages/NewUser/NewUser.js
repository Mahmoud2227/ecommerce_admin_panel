import { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from "@mui/material";

const NewUser = () => {
    const [active, setActive] = useState("");

    return (
        <Box p={2} width="100%">
            <Typography variant="h2">New User</Typography>
            <Box component="form" display="flex" flexDirection="column" rowGap={4} mt={2}>
                <Box display="flex" gap={6} flexWrap="wrap">
                    <TextField label="Username" fullWidth sx={{ maxWidth: 400 }} />
                    <TextField label="Full Name" fullWidth sx={{ maxWidth: 400 }} />
                </Box>
                <Box display="flex" gap={6} flexWrap="wrap">
                    <TextField label="Email" type="email" fullWidth sx={{ maxWidth: 400 }} />
                    <TextField label="Password" type="password" fullWidth sx={{ maxWidth: 400 }} />
                </Box>
                <Box display="flex" gap={6} flexWrap="wrap">
                    <TextField label="Phone" fullWidth sx={{ maxWidth: 400 }} />
                    <TextField label="Address" fullWidth sx={{ maxWidth: 400 }} />
                </Box>
                <Box display="flex" alignItems="center">
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
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
                <Button variant="contained" sx={{ alignSelf: "flex-start", px: 6 }}>
                    Create
                </Button>
            </Box>
        </Box>
    );
};

export default NewUser;
