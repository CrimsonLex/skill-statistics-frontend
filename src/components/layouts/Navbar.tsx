import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <Box className="navbar-container">
            <AppBar position="relative" sx={{ bgcolor: 'grey' }}>
                <Toolbar className="navbar-items">
                    <Typography variant="h6" component="div"></Typography>
                    <Button color="inherit" className="navbar-items--first">
                        <NavLink to="/" className="navbar-items__link">
                            Home
                        </NavLink>
                    </Button>

                    <Button color="inherit" className="nav-link">
                        <NavLink to="login" className="navbar-items__link">
                            Login
                        </NavLink>
                    </Button>
                    <Button color="inherit" className="nav-link">
                        <NavLink to="signUp" className="navbar-items__link">
                            Sign Up
                        </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
