import { errorMessageActions } from '../store/error-message-slice';
import { thankYouMessageActions } from '../store/thank-you-message-slice';
import { costFormActions } from './cost-form-slice';

function closeAfterTimeout(dispatch) {
	function timeout() {setTimeout(() => {
		dispatch(errorMessageActions.close());
		dispatch(thankYouMessageActions.close());
		dispatch(errorMessageActions.resetMessage());
	}, 10000);}
	timeout();
	return clearTimeout(timeout);
}

export const send = async (dispatch, formData, resetForm, resetFileUploader) => {
	dispatch(costFormActions.setSending());
	const result = await fetch(
		'https://expenseapp.fabian.plus/rotterdam/send-email.php',
		{
			method: 'POST',
			body: formData,
		}
	).then(
		(response) => {
			if (response.status === 200) {
				dispatch(costFormActions.resetSending());
				dispatch(thankYouMessageActions.open());
				closeAfterTimeout(dispatch);
				resetForm();
			} 
			else if (response.status === 422) {
				dispatch(costFormActions.resetSending());
				dispatch(
					errorMessageActions.setMessage(
							'Oops! We couldn’t open this PDF file, please make a screenshot or a photo instead! Thanks!'
					)
				);
				dispatch(errorMessageActions.open());
				// closeAfterTimeout(dispatch);
				resetFileUploader();
			} else {
				dispatch(costFormActions.resetSending());
				dispatch(
					errorMessageActions.setMessage(
						'An unknown error occured, apologies for the inconvenience!',
					)
				);
				dispatch(errorMessageActions.open());
				// closeAfterTimeout(dispatch);
			}
		},
		(error) => {
			dispatch(costFormActions.resetSending());
			dispatch(
				errorMessageActions.setMessage(
					'An Unknown error occured, apologies for the inconvenience!'
				)
			);
			dispatch(errorMessageActions.open());
			// closeAfterTimeout(dispatch);
		}
	);
	return result;
};
