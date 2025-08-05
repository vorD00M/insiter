import React, { useState } from 'react';
import {
    Box,
    Select,
    MenuItem,
    TextField,
    Button,
    InputLabel,
    FormControl
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

export default function TopSideForm() {
    const [purpose, setPurpose] = useState('');
    const [industry, setIndustry] = useState('');
    const [style, setStyle] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [color, setColor] = useState('#673ab7');

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', padding: 2, background: '#f9f9f9' }}>
            <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Для чего вам сайт</InputLabel>
                <Select value={purpose} onChange={e => setPurpose(e.target.value)} label="Для чего вам сайт">
                    <MenuItem value="landing">Лендинг</MenuItem>
                    <MenuItem value="promo">Сайт-визитка</MenuItem>
                    <MenuItem value="shop">Магазин</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel>Сфера деятельности</InputLabel>
                <Select value={industry} onChange={e => setIndustry(e.target.value)} label="Сфера деятельности">
                    <MenuItem value="beauty">Красота</MenuItem>
                    <MenuItem value="auto">Авто</MenuItem>
                    <MenuItem value="it">IT</MenuItem>
                </Select>
            </FormControl>

            <TextField
                size="small"
                placeholder="Название бизнеса"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
            />

            <FormControl sx={{ minWidth: 160 }} size="small">
                <InputLabel>Стиль сайта</InputLabel>
                <Select value={style} onChange={e => setStyle(e.target.value)} label="Стиль сайта">
                    <MenuItem value="classic">Классический</MenuItem>
                    <MenuItem value="modern">Современный</MenuItem>
                    <MenuItem value="minimal">Минимализм</MenuItem>
                </Select>
            </FormControl>

            <Box>
                <Button variant="outlined" component="label">
                    Фирменный цвет
                    <input
                        type="color"
                        hidden
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </Button>
            </Box>

            <Box>
                <Button
                    variant="contained"
                    startIcon={<CreateIcon />}
                    onClick={() => {
                        console.log({
                            purpose,
                            industry,
                            businessName,
                            style,
                            color,
                        });
                    }}
                >
                    Создать сайт
                </Button>
            </Box>
        </Box>
    );
}
