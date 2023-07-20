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

	const {
		value: dateValue,
		isValid: dateIsValid,
		hasError: dateHasError,
		inputChangeHandler: dateChangeHandler,
		inputBlurHandler: dateBlurHandler,
		reset: dateReset,
	} = useInput(isNotEmpty);

	const {
		value: descriptionValue,
		isValid: descriptionIsValid,
		hasError: descriptionHasError,
		inputChangeHandler: descriptionChangeHandler,
		inputBlurHandler: descriptionBlurHandler,
		reset: descriptionReset,
	} = useInput(isNotEmpty);

	useEffect(() => {
		if (nameIsValid && emailIsValid && dateIsValid && descriptionIsValid) {
			setFormValid(true);
		}
		return () => setFormValid(false);
	}, [nameIsValid, emailIsValid, dateIsValid, descriptionIsValid]);

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formValid) {
			nameBlurHandler();
			emailBlurHandler();
			return;
		}

		nameReset();
		emailReset();
		dateReset();
		descriptionReset();
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
		const dateClassNames = `${classes.formInput} ${
			dateHasError && classes.formInputInvalid
		}`;
		const descriptionClassNames = `${classes.formInput} ${
			descriptionHasError && classes.formInputInvalid
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
					<fieldset>
						<h2>Expenses</h2>
						<p className={classes.labelSubText}>
							You can submit any number of receipts and sum them up in one Expense Form, but please
							collect different purposes into separate submissions, to help making our bookkeeping transparent.
						</p>
						<label htmlFor="date" className={classes.labelText}>
							Date of expense (on receipt) *
						</label>
						<p className={classes.labelSubText}>
							If you have many receipts, then use the date from the latest. If they relate to multiple years, then it 
							is best to group them by years into separate submissions to help our bookkeeping.
						</p>
						<input
							id="date"
							type="date"
							name="date"
							className={dateClassNames}
							onChange={dateChangeHandler}
							onBlur={dateBlurHandler}
							value={dateValue}
						/>
						<div
							className={
								dateHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Invalid date.
						</div>

						<label htmlFor="description" className={classes.labelText}>
							Description *
						</label>
						<p className={classes.labelSubText}>
							Short title for the expense.
						</p>
						<input
							id="description"
							type="text"
							name="description"
							className={descriptionClassNames}
							onChange={descriptionChangeHandler}
							onBlur={descriptionBlurHandler}
							value={descriptionValue}
						/>
						<div
							className={
								descriptionHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Please provide a title.
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
