import { errorMessageActions } from '../store/error-message-slice';
import { thankYouMessageActions } from '../store/thank-you-message-slice';
import { costFormActions } from './cost-form-slice';

function closeAfterTimeout(dispatch) {
	function timeout() {setTimeout(() => {
		dispatch(errorMessageActions.close());
		dispatch(thankYouMessageActions.close());
	}, 7000);}
	timeout();
	return clearTimeout(timeout);
}

export const send = async (dispatch, formData, resetForm) => {
	dispatch(costFormActions.setSending());
	const result = await fetch(
		'https://expenseapp.fabian.plus/rotterdam/send-email.php',
		{
			method: 'POST',
			// headers: {
			// 	'Content-Type': 'multipart/form-data',
			// },
			body: formData,
		}
	).then(
		(response) => {
			console.log(response);
			if (response.status === 200) {
				dispatch(costFormActions.resetSending());
				dispatch(thankYouMessageActions.open());
				closeAfterTimeout(dispatch);
				resetForm();
			} else {
				dispatch(costFormActions.resetSending());
				dispatch(errorMessageActions.open());
				closeAfterTimeout(dispatch);
			}
		},
		(error) => {
			console.log('error!', error);
			dispatch(costFormActions.resetSending());
			dispatch(errorMessageActions.open());
			closeAfterTimeout(dispatch);
		}
	);
	return result;
};