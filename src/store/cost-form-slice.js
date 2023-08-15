import { createSlice } from '@reduxjs/toolkit';

const costFormSlice = createSlice({
	name: 'costForm',
	initialState: {
		status: false,
		submitting: false,
	},
	reducers: {
		open(state) {
			state.status = true;
		},
		reset(state) {
			state.status = false;
			state.submitting = false;
		},
		setSubmitting(state) {
			state.submitting = true;
		},
		resetSubmitting(state) {
			state.submitting = false;
		}
	},
});

export const costFormActions = costFormSlice.actions;

export default costFormSlice;
