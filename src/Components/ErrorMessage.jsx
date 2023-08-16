import classes from './Form.module.css';
import { NewFormButton } from './Buttons';
import { useDispatch } from 'react-redux';
import { errorMessageActions } from '../store/error-message-slice';
import Modal from './Modal';

const ErrorMessage = () => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(errorMessageActions.close());
	};
	return (
		<Modal>
			<div className={classes.messageContent}>
				<h2>An error occured while sending the form.</h2>
				<p>Apologies for the inconvenience!</p>
				<br />
				<br />
				<NewFormButton clickHandler={clickHandler}>
					Return to Form
				</NewFormButton>
			</div>
		</Modal>
	);
};

export default ErrorMessage;
