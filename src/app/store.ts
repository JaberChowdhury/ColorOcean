import { configureStore } from '@reduxjs/toolkit';
import { colorsReducer } from '../features';

const store = configureStore({
    reducer: {
        colorsReducer,
    },
});

export default store;
