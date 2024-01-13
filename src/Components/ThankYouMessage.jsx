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
				<h2>Thank you!</h2>
				<p>Your Expense Form has been sent successfully.</p>
				<br />

				<br />
				<SecondaryButton onClick={clickHandler}>New Form</SecondaryButton>
			</div>
		</Modal>
	);
};

export default ThankYouMessage;
