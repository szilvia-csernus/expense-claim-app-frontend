import { createSlice } from '@reduxjs/toolkit';

const errorMessageSlice = createSlice({
	name: 'errorMessage',
	initialState: false,
	reducers: {
		open() {
			return true;
		},
		reset() {
			return false;
		},
	},
});

export const errorMessageActions = errorMessageSlice.actions;

export default errorMessageSlice;
