import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './AuthNavbar.scss';

export default function AuthNavbar({ onSignOut }) {
    return (
        <Box className="auth-navbar-container">
            <AppBar position="relative" sx={{ bgcolor: 'grey' }}>
                <Toolbar className="auth-navbar-items auth-navbar-items--space-between">
                    <div className="auth-navbar-items auth-navbar-items--left">
                        <Button
                            color="inherit"
                            className="auth-navbar-items--first"
                        >
                            <NavLink
                                to="/topics"
                                className="auth-navbar-items__link"
                            >
                                Topics
                            </NavLink>
                        </Button>
                        <Button color="inherit" className="nav-link">
                            <NavLink
                                to="/resources"
                                className="auth-navbar-items__link"
                            >
                                Resources
                            </NavLink>
                        </Button>
                    </div>
                    <Button
                        color="inherit"
                        className="nav-link auth-navbar-items--right"
                        onClick={onSignOut}
                    >
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
