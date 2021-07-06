import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'ui',
    initialState: {
        mode: 'light',
        language: 'en',
        currency: 'USD'
    },
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
        changeCurrency: (state, action) => {
            state.currency = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeMode, changeLanguage, changeCurrency } = counterSlice.actions;

export default counterSlice.reducer;