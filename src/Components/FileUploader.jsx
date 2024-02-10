import uuid from 'react-uuid';

import classes from './Form.module.css';
import { DeleteButton } from './Buttons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const FileUploader = ({
	selectedFile,
	setSelectedFile,
	fileError,
	setFileError,
	fileList,
	setFileList,
	totalFileSize,
	setTotalFileSize,
}) => {
	const submitting = useSelector((state) => state.costForm.submitting);

	const receiptsClassNames = `${classes.formInput} 
                                ${fileError && classes.fileInputInvalid} 
                                ${classes.customFileUploadButton}`;

	const addFileToList = (file) => {
		setFileList((prevList) => [...prevList, file]);
		setTotalFileSize((prevSize) => prevSize + file.size);
	};

	const removeFileFromList = (file) => {
		setFileList((prevList) => prevList.filter((f) => f !== file));
		setTotalFileSize((prevSize) => prevSize - file.size);
	};

	useEffect(() => {
		if (submitting) {
			if (fileList.length === 0) {
				setFileError('Please upload a picture of the receipt.');
			}
		}
	}, [submitting, fileList, setFileError, totalFileSize]);

	const fileUploadIsValid = (file) => {
		const fileTypes = [
			'image/png',
			'image/jpeg',
			'image/jpg',
			'application/pdf',
		];
		const fileSize = file.size;
		const fileType = file.type;
		if (!fileTypes.includes(fileType)) {
			setFileError('File type not supported');
			setTimeout(() => setFileError(false), 3000);
			return false;
		} else if (totalFileSize + fileSize > 5.5 * 1024 * 1024) {
			setFileError('Total file upload cannot exceed 5 MB');
			setTimeout(() => setFileError(false), 5000);
			return false;
		}
		setFileError(false);
		return true;
	};

	const handleFileInput = (e) => {
		const file = e.target.files[0];
		if (fileUploadIsValid(file)) {
			setSelectedFile(file);
			addFileToList(file);
		}
	};

	const handleOnClick = (e) => {
		setFileError(false);
	};

	const showFileList = (
		<ul>
			{fileList.map((file, idx) => {
				return (
					<li className={classes.fileListItem} key={uuid()}>
						<DeleteButton onClick={() => removeFileFromList(file)}>
							X
						</DeleteButton>
						{file.size < 1024 * 1024
							? `${(file.size / 1024).toFixed(0)} kB`
							: `${(file.size / 1024 / 1024).toFixed(2)} MB`}
					</li>
				);
			})}
		</ul>
	);

	return (
		<>
			{showFileList}
			<br />
			<div className={classes.uploadButtonFrame}>
				<label htmlFor="receipts" className={receiptsClassNames}>
					Add Photo
				</label>
			</div>
			<input
				id="receipts"
				type="file"
				name="receipts"
				className={classes.fileInputField}
				accept="image/png, image/jpeg, image/jpg, application/pdf"
				onChange={handleFileInput}
				onClick={handleOnClick}
			/>
			<div
				className={fileError ? classes.feedbackInvalid : classes.feedbackValid}
			>
				{fileError}
			</div>
		</>
	);
};

export default FileUploader;
