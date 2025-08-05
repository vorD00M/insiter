
import React, { useContext, useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, IconButton } from '@mui/material';


export default function Header() {
    return (

            <AppBar position="static" sx={{ bgcolor: 'white', borderBottom: '1px solid #000', boxShadow: 'none' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Логотип */}
                    <Box display="flex" alignItems="center" gap={2}>
                        <img src="/logo.svg" alt="Insiter" style={{height: 40}}/>

                    </Box>

                    {/* Навигация */}
                    <Box display="flex" gap={2}>
                        <Button variant="text" sx={{ color: '#000', textTransform: 'none' }}>
                            ТАРИФЫ
                        </Button>


                            <>
                                <Button
                                    variant="text"
                                    sx={{ color: '#000', textTransform: 'none' }}
                                    onClick={() => handleOpenAuth('login')}
                                >
                                    ВОЙТИ
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{ borderRadius: '100px', textTransform: 'none' }}
                                    onClick={() => handleOpenAuth('register')}
                                >
                                    РЕГИСТРАЦИЯ
                                </Button>
                            </>

                    </Box>
                </Toolbar>
            </AppBar>



    );
};
