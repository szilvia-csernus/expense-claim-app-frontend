import classes from './Form.module.css';
import { DeleteButton } from './Buttons';
import { useSelector } from 'react-redux';

const FileUploader = ({selectedFile, setSelectedFile, fileError, setFileError}) => {
    const submitting = useSelector(state => state.costForm.submitting);
    const receiptsClassNames = `${classes.formInput} 
                                ${fileError && classes.fileInputInvalid} 
                                ${classes.fileInputField}`;

    if (submitting) {
        if (!selectedFile) {
           setFileError('Please upload a file')
        }
    }
    const fileUploadIsValid = (file) => {
			const fileTypes = [
				'image/png',
				'image/jpeg',
				'image/jpg',
				'application/pdf',
			];
			const fileSize = file.size / 1024 / 1024;
			const fileType = file.type;
            if (!fileTypes.includes(fileType)) {
                setFileError('File type not supported');
                return false
            }
			else if (fileSize > 1) {
                setFileError('File size too large')
                return false
			}
			setFileError(null);
            return true
		};

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (fileUploadIsValid(file)) {
            setSelectedFile(file);
        }
    }

    const removeFile = () => {
        setSelectedFile(null);
    }

    const showInputField = 
            (<input
                type="file"
                name="receipts"
                accept="image/png, image/jpeg, image/jpg, application/pdf"
                className={receiptsClassNames}
                onChange={handleFileInput}
            />);

    const showFile =
            (<div className={classes.fileListItem}>
                <DeleteButton onClick={() => removeFile(selectedFile)}>
                    X
                </DeleteButton>
                {selectedFile?.name} - {(selectedFile?.size / 1024).toFixed(2)} kB
            </div>);

    return (
			<>
				{selectedFile && showFile}
				{!selectedFile && showInputField}
				<div
					className={
						fileError ? classes.feedbackInvalid : classes.feedbackValid
					}
				>
					{fileError}
				</div>
			</>
		);
}

export default FileUploader;