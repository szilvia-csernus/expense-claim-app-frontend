import classes from './Form.module.css';
import { NewFormButton } from './Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { errorMessageActions } from '../store/error-message-slice';
import Modal from './Modal';

const ErrorMessage = () => {
	const dispatch = useDispatch();
	const message = useSelector(state => state.errorMessage.message)
	const clickHandler = () => {
		dispatch(errorMessageActions.close());
		dispatch(errorMessageActions.resetMessage());
	};
	
	return (
		<Modal>
			<div className={classes.messageContent}>
				<h2>ERROR</h2>
				<p>{message}</p>
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
