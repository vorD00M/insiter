import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useSelector } from 'react-redux';

export default function BlockCanvas() {
    const blocks = useSelector((state) => state.blocks.canvasBlocks);

    return (
        <Box p={2} sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>Полотно</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box>
                {blocks.length === 0 && (
                    <Typography color="text.secondary">Нет добавленных блоков</Typography>
                )}
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: block.html }}
                        style={{ marginBottom: 20, border: '1px dashed #ccc' }}
                    />
                ))}
            </Box>
        </Box>
    );
}
