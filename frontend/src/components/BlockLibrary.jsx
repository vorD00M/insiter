import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';

export default function BlockLibrary() {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        fetch('https://insiter.solution-studio.ru/api/blocks.php')
            .then(res => res.json())
            .then(setBlocks)
            .catch(console.error);
    }, []);

    return (
        <Box p={3}>
            <Typography variant="h5" gutterBottom>
                Библиотека блоков
            </Typography>

            <Grid container spacing={3}>
                {blocks.map((block) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`${block.template}-${block.id}`}>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                transition: '0.2s',
                                '&:hover': { boxShadow: 6 },
                            }}
                            onClick={() => {
                                console.log('Выбран блок:', block);
                                // Здесь ты можешь вызывать setCurrentBlock(block) или что-то подобное
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="160"
                                image={block.screenshot}
                                alt={block.name}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600}>
                                    {block.name}
                                </Typography>
                                <Chip label={block.category} size="small" sx={{ mr: 1, mt: 1 }} />
                                <Chip label={block.template} size="small" color="secondary" sx={{ mt: 1 }} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
