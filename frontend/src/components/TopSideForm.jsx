
import {
    Box,
    TextField,
    MenuItem,
    Select,
    Button,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CreateIcon from '@mui/icons-material/Create';

export default function TopSideForm({ onPurposeChange, onColorChange }) {
    const [purpose, setPurpose] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setPurpose(value);
        onPurposeChange?.(value);
    };

    const [industry, setIndustry] = useState('');
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [color, setColor] = useState('#673ab7');

    const fieldStyle = {
        borderRadius: '100px',
        border: '1px solid #000',
        minWidth: '300px',
        height: '60px',
        px: 2,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            height: '60px',
        },
        '& input': {
            height: '60px',
            padding: '0 16px',
            boxSizing: 'border-box',
        },
    };

    return (
        <Box display="flex" flexWrap="wrap" gap={2} alignItems="flex-start" justifyContent="center" p={3}>
            {/* Селект: Для чего сайт */}
            <Box>

                <Select
                    displayEmpty
                    value={purpose}
                    onChange={handleChange}
                    sx={fieldStyle}
                >
                    <MenuItem disabled value="">Для чего вам сайт</MenuItem>
                    <MenuItem value="portfolio">Портфолио</MenuItem>
                    <MenuItem value="shop">Магазин</MenuItem>
                    <MenuItem value="landing">Лендинг</MenuItem>
                </Select>
            </Box>

            {/* Селект: Сфера деятельности */}
            <Box>
                <Select
                    displayEmpty
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    sx={fieldStyle}
                >
                    <MenuItem disabled value="">Сфера деятельности</MenuItem>
                    <MenuItem value="it">IT</MenuItem>
                    <MenuItem value="education">Образование</MenuItem>
                    <MenuItem value="medicine">Медицина</MenuItem>
                </Select>
            </Box>

            {/* Input: Название бизнеса */}
            <Box>
                <TextField
                    size="small"
                    placeholder="Название бизнеса"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={fieldStyle}
                    variant="outlined"
                />
            </Box>

            {/* Селект: Стиль сайта */}
            <Box>

                <Select
                    displayEmpty
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    sx={fieldStyle}
                >
                    <MenuItem disabled value="">Стиль сайта</MenuItem>
                    <MenuItem value="minimal">Минимализм</MenuItem>
                    <MenuItem value="modern">Современный</MenuItem>
                    <MenuItem value="classic">Классический</MenuItem>
                </Select>
            </Box>

            {/* Выбор цвета */}
            <Box sx={{ position: 'relative' }}>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '100px',
                        borderColor: '#000',
                        color: '#000',
                        width: 300,
                        height: 60,
                        textTransform: 'none',
                        pr: '44px',
                    }}
                    onClick={() => document.getElementById('color-picker')?.click()}
                >
                    Фирменный цвет
                </Button>

                <Box
                    sx={{
                        position: 'absolute',
                        right: 12,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: color,
                        border: '1px solid #ccc',
                    }}
                />

                <input
                    type="color"
                    id="color-picker"
                    value={color}
                    defaultValue="#1976d2"
                    onChange={(e) => onColorChange(e.target.value)}
                    style={{ display: 'none' }}
                />
            </Box>

            {/* Кнопка */}
            <Box mt="28px">
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                        width: 300,
                        height: 60,
                        borderRadius: '100px',
                        textTransform: 'none',
                    }}
                    startIcon={<RocketLaunchIcon />}
                >
                    Создать сайт
                </Button>
            </Box>
        </Box>
    );
}

