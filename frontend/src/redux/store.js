import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from './blocksSlice';

export const store = configureStore({
    reducer: {
        blocks: blocksReducer,
    },
});
