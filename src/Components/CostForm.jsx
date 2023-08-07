import classes from './Form.module.css';

import { useState, useEffect, useRef } from "react";
import useInput from '../Hooks/use-input';
import { ButtonGeneral } from './Buttons';
import { useDispatch } from 'react-redux';
import { send } from '../store/form-action-creator';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) =>
	/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
const noValidate = (value) => true;

const CostForm = () => {
    const [formValid, setFormValid] = useState(false);
    const dispatch = useDispatch();
	const formRef = useRef(null);

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

	const {
		value: purposeValue,
		isValid: purposeIsValid,
		hasError: purposeHasError,
		inputChangeHandler: purposeChangeHandler,
		inputBlurHandler: purposeBlurHandler,
		reset: purposeReset,
	} = useInput(isNotEmpty);

	const {
		value: totalValue,
		isValid: totalIsValid,
		hasError: totalHasError,
		inputChangeHandler: totalChangeHandler,
		inputBlurHandler: totalBlurHandler,
		reset: totalReset,
	} = useInput(isNotEmpty);

	const {
		value: receiptsValue,
		isValid: receiptsIsValid,
		hasError: receiptsHasError,
		inputChangeHandler: receiptsChangeHandler,
		inputBlurHandler: receiptsBlurHandler,
		reset: receiptsReset,
	} = useInput(isNotEmpty);
	
	const {
		value: ibanValue,
		isValid: ibanIsValid,
		hasError: ibanHasError,
		inputChangeHandler: ibanChangeHandler,
		inputBlurHandler: ibanBlurHandler,
		reset: ibanReset,
	} = useInput(isNotEmpty);

	const {
		value: accountNameValue,
		isValid: accountNameIsValid,
		hasError: accountNameHasError,
		inputChangeHandler: accountNameChangeHandler,
		inputBlurHandler: accountNameBlurHandler,
		reset: accountNameReset,
	} = useInput(noValidate);


	useEffect(() => {
		if (nameIsValid && 
			emailIsValid && 
			dateIsValid && 
			descriptionIsValid &&
			purposeIsValid &&
			totalIsValid &&
			receiptsIsValid &&
			ibanIsValid &&
			accountNameIsValid) {
			setFormValid(true);
		}
		return () => setFormValid(false);
		}, [nameIsValid, 
			emailIsValid, 
			dateIsValid, 
			descriptionIsValid, 
			purposeIsValid,
			totalIsValid,
			receiptsIsValid,
			ibanIsValid,
			accountNameIsValid]);

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formValid) {
			nameBlurHandler();
			emailBlurHandler();
			dateBlurHandler();
			descriptionBlurHandler();
			purposeBlurHandler();
			totalBlurHandler();
			receiptsBlurHandler();
			ibanBlurHandler();
			accountNameBlurHandler();
			return;
		}

		nameReset();
		emailReset();
		dateReset();
		descriptionReset();
		purposeReset();
		totalReset();
		receiptsReset();
		ibanReset();
		accountNameReset();

		send(dispatch, formRef.current
		// 	{
		// 	name: nameValue,
		// 	email: emailValue,
		// 	date: dateValue,
		// 	description: descriptionValue,
		// 	purpose: purposeValue,
		// 	total: totalValue,
		// 	receipts: receiptsValue,
		// 	iban: ibanValue,
		// 	accountName: accountNameValue,
		// }
		);
	};


		const nameClassNames = `${classes.formInput} ${
			nameHasError && classes.formInputInvalid}`;
		const emailClassNames = `${classes.formInput} ${
			emailHasError && classes.formInputInvalid}`;
		const dateClassNames = `${classes.formInput} ${
			dateHasError && classes.formInputInvalid}`;
		const descriptionClassNames = `${classes.formInput} ${
			descriptionHasError && classes.formInputInvalid}`;
		const purposeClassNames = `${classes.formInput} ${
			purposeHasError && classes.formInputInvalid}`;
		const totalClassNames = `${classes.formInput} ${
			totalHasError && classes.formInputInvalid}`;
		const receiptsClassNames = `${classes.formInput} ${
			receiptsHasError && classes.formInputInvalid} 
			${classes.fileInputField}`;
		const ibanClassNames = `${classes.formInput} ${
			ibanHasError && classes.formInputInvalid}`;
		const accountNameClassNames = `${classes.formInput} ${
			accountNameHasError && classes.formInputInvalid}`;

	return (
		<section className={classes.content}>
			<h1 className={classes.header}>Expense Form</h1>
			<div className={classes.body}>
				<form className={classes.form} ref={formRef} onSubmit={submitHandler}>
					{/* PERSONAL INFORMATION */}
					<fieldset>
						<h2>Personal Information</h2>

						{/* Name  */}
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

						{/* Email  */}
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

					{/* EXPENSES */}
					<fieldset>
						<h2>Expenses</h2>
						<p className={classes.labelSubText}>
							You can submit any number of receipts and sum them up in one
							Expense Form, but please collect different purposes into separate
							submissions, to help making our bookkeeping transparent.
						</p>

						{/* Date  */}
						<label htmlFor="date" className={classes.labelText}>
							Date of expense (on receipt) *
						</label>
						<p className={classes.labelSubText}>
							If you have many receipts, then use the date from the latest. If
							they relate to multiple years, then it is best to group them by
							years into separate submissions to help our bookkeeping.
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

						{/* Description  */}
						<label htmlFor="description" className={classes.labelText}>
							Description *
						</label>
						<p className={classes.labelSubText}>Short title for the expense.</p>
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
								descriptionHasError
									? classes.feedbackInvalid
									: classes.feedbackValid
							}
						>
							Please provide a short description.
						</div>

						{/* Purpose  */}
						<div htmlFor="purpose" className={classes.labelText}>
							Purpose *
						</div>
						<p className={classes.labelSubText}>
							Select one option for the goal of the expense.
						</p>
						<select
							id="purpose"
							type="text"
							name="purpose"
							className={purposeClassNames}
							onChange={purposeChangeHandler}
							onBlur={purposeBlurHandler}
							value={purposeValue}
						>
							<option value="Team building (4510)">Team building (4510)</option>
							<option value="Team meals (4500)">Team meals (4500)</option>
							<option value="Kids and Youth ministry (4460)">
								Kids and Youth ministry (4460)
							</option>
							<option value="Audiovisual equipments (4450)">
								Audiovisual equipments (4450)
							</option>
							<option value="Meeting venue decoration (4415)">
								Meeting venue decoration (4415)
							</option>
							<option value="Meeting catering (4410)">
								Meeting catering (4410)
							</option>
							<option value="Advertising (4310)">Advertising (4310)</option>
							<option value="Training / Conference Fees (4250)">
								Training / Conference Fees (4250)
							</option>
							<option value="Software subscription (4116)">
								Software subscription (4116)
							</option>
							<option value="Transport costs (4108)">
								Transport costs (4108)
							</option>
							<option value="Love People Fund (1910)">
								Love People Fund (1910)
							</option>
							<option value="Love Delft Fund (1913)">
								Love Delft Fund (1913)
							</option>
							<option value="Rotterdam (4600)">Rotterdam (4600)</option>
							<option value="other">other</option>
						</select>

						<div
							className={
								purposeHasError
									? classes.feedbackInvalid
									: classes.feedbackValid
							}
						>
							Please select a purpose.
						</div>

						{/* Total  */}
						<label htmlFor="total" className={classes.labelText}>
							Total *
						</label>
						<p className={classes.labelSubText}>
							The total amount in EUR to be reimbursed.
						</p>
						<input
							id="total"
							type="total"
							name="total"
							className={totalClassNames}
							onChange={totalChangeHandler}
							onBlur={totalBlurHandler}
							value={totalValue}
						/>
						<div
							className={
								totalHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Invalid amount.
						</div>

						{/* Receipts  */}
						<label htmlFor="receipts" className={classes.labelText}>
							Receipt(s) *
						</label>
						<p className={classes.labelSubText}>
							Please upload a clear picture or PDF of the receipt of the expense
							made. You can upload multiple files.
						</p>
						<input
							id="receipts"
							type="file"
							accept="image/png, image/jpeg, image/jpg, application/pdf"
							name="receipts"
							className={receiptsClassNames}
							onChange={receiptsChangeHandler}
							onBlur={receiptsBlurHandler}
							value={receiptsValue}
						/>
						
						<div
							className={
								receiptsHasError
									? classes.feedbackInvalid
									: classes.feedbackValid
							}
						>
							Please upload your receipts.
						</div>
						<p className={classes.labelSubText}>
							Accepted file types: png, jpg, jpeg, pdf. Max file size: 30MB.
						</p>
					</fieldset>

					{/* REIMBURSEMENT DETAILS  */}
					<fieldset>
						<h2>Reimbursement Details</h2>
						{/* Bank Account  */}
						<label htmlFor="iban" className={classes.labelText}>
							Bank Account *
						</label>
						<p className={classes.labelSubText}>
							The IBAN account number, where the reimbursement is to be
							transferred.
						</p>
						<input
							id="iban"
							type="text"
							name="iban"
							className={ibanClassNames}
							onChange={ibanChangeHandler}
							onBlur={ibanBlurHandler}
							value={ibanValue}
						/>
						<div
							className={
								ibanHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Please provide your bank account number.
						</div>

						{/* Name of Bank Account Holder  */}
						<label htmlFor="accountName" className={classes.labelText}>
							Name of Bank Account Holder *
						</label>
						<p className={classes.labelSubText}>
							Please enter the name of the account holder if it is different
							from the name entered at the top of this form.
						</p>
						<input
							id="accountName"
							type="accountName"
							name="accountName"
							className={accountNameClassNames}
							onChange={accountNameChangeHandler}
							onBlur={accountNameBlurHandler}
							value={accountNameValue}
						/>
						<div
							className={
								accountNameHasError
									? classes.feedbackInvalid
									: classes.feedbackValid
							}
						>
							Invalid name.
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
