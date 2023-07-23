// email service provided by https://www.emailjs.com/
import emailjs from '@emailjs/browser';

import { thankYouMessageActions } from './thank-you-message-slice';
import { errorMessageActions } from './error-message-slice';

// this action creator sends the form data with emailJS and initiates
// either the 'THANK YOU' or the 'Error' modal.
export const send = async (dispatch, form) => {
	emailjs.init('sZPW9YDqBsCM52fA-');
	const result = await emailjs
		.sendForm('my-emailjs-service', 'universal-template', form)
		.then(
			(response) => {
				console.log(response);
				if (response.status === 200) {
					dispatch(thankYouMessageActions.open())
				} else {
					dispatch(errorMessageActions.open())
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
