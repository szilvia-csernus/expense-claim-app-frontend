import { createSlice } from '@reduxjs/toolkit';

function getInitialChurch() {
	const params = new URLSearchParams(window.location.search);
	const adm = params.get('adm');
	const localChurch = localStorage.getItem('church');
	return adm !== null ? adm : localChurch;
}

const initialChurch = getInitialChurch();
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
