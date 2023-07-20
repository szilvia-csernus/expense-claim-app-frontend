import classes from './Form.module.css';

import { useState, useEffect } from "react";
import useInput from '../Hooks/use-input';
import { ButtonGeneral } from './Buttons';
// import { useDispatch } from 'react-redux';
// import { send } from '../store/form-action-creator';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) =>
	/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);

const CostForm = () => {
    const [formValid, setFormValid] = useState(false);
    // const dispatch = useDispatch();

    const {
			value: nameValue,
			isValid: nameIsValid,
			hasError: nameHasError,
			inputChangeHandler: nameChangeHandler,
			inputBlurHandler: nameBlurHandler,
			reset: nameReset,
		} = useInput(isNotEmpty);

		const {
			value: emailValue,
			isValid: emailIsValid,
			hasError: emailHasError,
			inputChangeHandler: emailChangeHandler,
			inputBlurHandler: emailBlurHandler,
			reset: emailReset,
		} = useInput(isEmail);

		useEffect(() => {
			if (nameIsValid && emailIsValid) {
				setFormValid(true);
			}
			return () => setFormValid(false);
		}, [nameIsValid, emailIsValid]);

		const submitHandler = (event) => {
			event.preventDefault();

			if (!formValid) {
				nameBlurHandler();
				emailBlurHandler();
				return;
			}

			nameReset();
			emailReset();
			// dispatch(volunteerFormActions.reset());
		// 	send(dispatch, {
		// 		name: nameValue,
		// 		email: emailValue,
		// 		phone: phoneNr,
		// 		message,
		// 	});
		};


		const nameClassNames = `${classes.formInput} ${
			nameHasError && classes.formInputInvalid
		}`;
		const emailClassNames = `${classes.formInput} ${
			emailHasError && classes.formInputInvalid
		}`;

	return (
		<section className={classes.content}>
			<h1 className={classes.header}>Redeemer Delft Expense Form</h1>
			<div className={classes.body}>
				<form className={classes.form} onSubmit={submitHandler}>
					<fieldset>
						<h2>Personal Information</h2>

						<label htmlFor="name" className={classes.labelText}>
							Name *
						</label>
						<p className={classes.labelSubText}>
							Please give your name here in case we need to contact you.
						</p>
						<input
							id="name"
							type="text"
							name="name"
							className={nameClassNames}
							onChange={nameChangeHandler}
							onBlur={nameBlurHandler}
							value={nameValue}
						/>
						<div
							className={
								nameHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Please provide your name.
						</div>

						<label htmlFor="email" className={classes.labelText}>
							Email address *
						</label>
						<p className={classes.labelSubText}>
							Your email address where we can reach you.
						</p>
						<input
							id="email"
							type="email"
							name="email"
							className={emailClassNames}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={emailValue}
						/>
						<div
							className={
								emailHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Please provide your email address.
						</div>
					</fieldset>

					<div className={classes.footer}>
						<ButtonGeneral type="submit">Submit</ButtonGeneral>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CostForm;
