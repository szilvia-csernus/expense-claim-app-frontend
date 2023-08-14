export const send = async (dispatch, form) => {
	const result = await fetch('/api/send-email', {
		method: 'POST',
		headers: {
			'Content-Type': 'multipart/form-data',
		},
		body: form,
	}).then(
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
