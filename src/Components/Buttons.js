import classes from './Buttons.module.css';

export const Button = (props) => {
	const classNames = `${classes.button} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonGeneral = (props) => {
	const classNames = `${classes.button} ${classes.general} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};
