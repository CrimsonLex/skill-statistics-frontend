import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} className="navbar-container">
            <AppBar position="relative" sx={{ bgcolor: 'grey' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Button color="inherit">
                        <NavLink to="login">Login</NavLink>
                    </Button>
                    <Button color="inherit">
                        <NavLink to="signUp">Sign Up</NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
