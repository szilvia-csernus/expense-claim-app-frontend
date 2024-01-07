import { createSlice } from '@reduxjs/toolkit';

const initialChurch = localStorage.getItem('church');
const initialStatus = ( initialChurch === null || initialChurch === '');

const selectChurchSlice = createSlice({
	name: 'selectChurch',
	initialState: {
		status: initialStatus,
		church: initialChurch,
	},
	reducers: {
        open(state) {
            state.status = true;
        },
		close(state) {
			state.status = false;
		},
		setChurch(state, action) {
			state.church = action.payload;
            localStorage.setItem('church', action.payload);
		},
		resetChurch(state) {
            state.status = true;
			state.church = null;
            localStorage.removeItem('church');
		},
	},
});

export const selectChurchActions = selectChurchSlice.actions;

export default selectChurchSlice;
