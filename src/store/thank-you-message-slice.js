import { createSlice } from '@reduxjs/toolkit';

const thankYouMessageSlice = createSlice({
	name: 'thankYouMessage',
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

export const thankYouMessageActions = thankYouMessageSlice.actions;

export default thankYouMessageSlice;
