import React, { useState, useEffect } from 'react';
import TopSideForm from './components/TopSideForm';
import Header from './components/Header';
import BlockRenderer from './components/BlockRenderer';
import { Container, Box, Typography } from '@mui/material';

export default function App() {
    const [purpose, setPurpose] = useState('');
    const [blocks, setBlocks] = useState([]);
    const [themeColor, setThemeColor] = useState('#1976d2');

    useEffect(() => {
        if (purpose === 'landing') {
            fetch('https://insiter.solution-studio.ru/api/blocks.php')
                .then((res) => res.json())
                .then((data) => {
                    const clusterBlocks = data.filter(b => b.template === 'cluster');

                    return Promise.all(
                        clusterBlocks.map(block =>
                            fetch(block.html)
                                .then(res => {
                                    if (!res.ok) throw new Error(`Ошибка загрузки ${block.html}`);
                                    return res.text();
                                })
                                .then(html => ({ ...block, html }))
                                .catch(err => {
                                    console.warn('Ошибка блока:', block.html, err);
                                    return null; // Пропустить ошибочные
                                })
                        )
                    );
                })
                .then((loadedBlocks) => {
                    const validBlocks = loadedBlocks.filter(Boolean); // удалим null
                    setBlocks(validBlocks);
                    console.log('✅ Загруженные блоки:', validBlocks);
                })
                .catch((err) => {
                    console.error('Ошибка при загрузке блоков:', err);
                });
        } else {
            setBlocks([]);
        }
    }, [purpose]);
    useEffect(() => {
        console.log('blocks изменились:', blocks);
    }, [blocks]);
    return (
        <>
            <Header />
            <Box mt={4} mb={4}>
                <TopSideForm onPurposeChange={setPurpose} onColorChange={setThemeColor} />
            </Box>

            <Container>
                {blocks.length > 0 && (
                    <Box>
                        <Typography variant="h6" mb={2}>
                            Загруженные блоки из шаблона Cluster:
                        </Typography>

                        {blocks.map((block, index) => (
                            <BlockRenderer key={index} block={block} themeColor={themeColor} />

                        ))}
                    </Box>
                )}
            </Container>
        </>
    );
}
