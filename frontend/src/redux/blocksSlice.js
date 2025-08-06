import { createSlice } from '@reduxjs/toolkit';

const blocksSlice = createSlice({
    name: 'blocks',
    initialState: {
        canvasBlocks: [],
    },
    reducers: {
        addBlock: (state, action) => {
            state.canvasBlocks.push(action.payload);
        },
        clearCanvas: (state) => {
            state.canvasBlocks = [];
        },
    },
});

export const { addBlock, clearCanvas } = blocksSlice.actions;
export default blocksSlice.reducer;
