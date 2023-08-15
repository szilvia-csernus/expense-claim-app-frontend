import { errorMessageActions } from '../store/error-message-slice';
import { thankYouMessageActions } from '../store/thank-you-message-slice';
import { costFormActions } from './cost-form-slice';

export const send = async (dispatch, formData) => {
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
			} else {
				dispatch(costFormActions.resetSending());
				dispatch(errorMessageActions.open());
			}
		},
		(error) => {
			console.log('error!', error);
			dispatch(costFormActions.resetSending());
			dispatch(errorMessageActions.open());
		}
	);
	return result;
};
