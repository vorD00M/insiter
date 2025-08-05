import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <AppBar position="static" elevation={4}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <img src="/logo.svg" alt="Insiter" style={{ height: 40 }} />
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="primary">ТАРИФЫ</Button>
                    <Button color="primary">ВОЙТИ</Button>
                    <Button variant="outlined" color="primary">РЕГИСТРАЦИЯ</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
