import { createSlice } from '@reduxjs/toolkit';
import { useHexadecimal } from '../../hooks';

type initialValueType = {
    colors: string[];
};

const generateColors = (): string[] => {
    let colorCode: string[] = [];
    for (let i = 0; i < 120; i++) {
        const color = useHexadecimal();
        colorCode.push(color);
    }
    return colorCode;
};

const initialState: initialValueType = {
    colors: generateColors(),
};

const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        updateColors: (state) => {
            state.colors = generateColors();
        },
    },
});

export const { updateColors } = colorsSlice.actions;
const colorsReducer = colorsSlice.reducer;
export default colorsReducer;
