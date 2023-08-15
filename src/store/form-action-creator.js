import { errorMessageActions } from '../store/error-message-slice';
import { thankYouMessageActions } from '../store/thank-you-message-slice';

export const send = async (dispatch, formData) => {
	const result = await fetch(
		'"https://expenseapp.fabian.plus/rotterdam/send-email.php"',
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
				dispatch(thankYouMessageActions.open());
			} else {
				dispatch(errorMessageActions.open());
			}
		},
		(error) => {
			console.log('error!', error);
			dispatch(errorMessageActions.open());
		}
	);
	console.log(result);
	return result;
};
