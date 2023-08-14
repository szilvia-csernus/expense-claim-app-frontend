import classes from './Buttons.module.css';

export const SubmitButton = (props) => {
	const classNames = `${classes.button} ${classes.submitButton}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const DeleteButton = (props) => {
	const classNames = `${classes.button} ${classes.deleteButton}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};
