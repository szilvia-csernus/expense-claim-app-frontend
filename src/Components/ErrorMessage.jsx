import classes from './Form.module.css';
import { NewFormButton } from './Buttons';
import { useDispatch } from 'react-redux';
import { errorMessageActions } from '../store/error-message-slice';

const ErrorMessage = () => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(errorMessageActions.close());
	};
	return (
		<section className={classes.content}>
			<h2>An error occured while sending the form.</h2>
			<p>Apologies for the inconvenience!</p>
			<br/><br/>
			<NewFormButton clickHandler={clickHandler}>
				New Form
			</NewFormButton>
		</section>
	);
};

export default ErrorMessage;
