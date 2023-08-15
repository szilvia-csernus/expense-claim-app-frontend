import classes from './Form.module.css';
import { NewFormButton } from './Buttons';
import { useDispatch } from 'react-redux';
import { thankYouMessageActions } from '../store/thank-you-message-slice';

const ThankYouMessage = () => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(thankYouMessageActions.close());
	};
	return (
		<section className={classes.content}>
			<h2>Your Expense form has been sent successfully.</h2>
			<p>Thank you!</p>
			<br />
			<br />
			<NewFormButton clickHandler={clickHandler}>New Form</NewFormButton>
		</section>
	);
};

export default ThankYouMessage;
