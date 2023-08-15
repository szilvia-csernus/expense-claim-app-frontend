import { createSlice } from '@reduxjs/toolkit';

const errorMessageSlice = createSlice({
	name: 'errorMessage',
	initialState: false,
	reducers: {
		open() {
			return true;
		},
		close() {
			return false;
		},
	},
});

export const errorMessageActions = errorMessageSlice.actions;

export default errorMessageSlice;
