import classes from './Buttons.module.css';

export const SubmitButton = (props) => {
	const classNames = `${classes.button} ${classes.submitButton}`;
	return (
		<button type="submit" className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const DeleteButton = (props) => {
	const classNames = `${classes.button} ${classes.deleteButton}`;
	return (
		<button type="button" className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const NewFormButton = (props) => {
	const classNames = `${classes.button} ${classes.submitButton}`;
	return (
		<button type="button" className={classNames} onClick={props.clickHandler}>
			{props.children}
		</button>
	);
}
