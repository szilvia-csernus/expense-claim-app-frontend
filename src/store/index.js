import { configureStore } from '@reduxjs/toolkit';
import costFormSlice from './cost-form-slice';
import thankYouMessageSlice from './thank-you-message-slice';
import errorMessageSlice from './error-message-slice';
import selectChurchSlice from './select-church-slice';

const store = configureStore({
	reducer: {
		selectChurch: selectChurchSlice.reducer,
		costForm: costFormSlice.reducer,
		thankYouMessage: thankYouMessageSlice.reducer,
		errorMessage: errorMessageSlice.reducer,
	}
});

export default store;
