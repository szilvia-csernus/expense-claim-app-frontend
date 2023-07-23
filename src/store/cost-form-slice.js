import { createSlice } from '@reduxjs/toolkit';

const costFormSlice = createSlice({
	name: 'costForm',
	initialState: true,
	reducers: {
		open() {
			return true;
		},
		reset() {
			return false;
		},
	},
});

export const costFormActions = costFormSlice.actions;

export default costFormSlice;
