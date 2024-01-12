import classes from './Form.module.css';
import { SecondaryButton } from './Buttons';
import { useDispatch } from 'react-redux';
import { thankYouMessageActions } from '../store/thank-you-message-slice';
import Modal from './Modal';

const ThankYouMessage = () => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(thankYouMessageActions.close());
	};
	return (
		<Modal>
			<div className={classes.messageContent}>
				<h2>Your Expense form has been sent successfully.</h2>
				<p>Thank you!</p>
				<br />
				<br />
				<SecondaryButton onClick={clickHandler}>New Form</SecondaryButton>
			</div>
		</Modal>
	);
};

export default ThankYouMessage;
