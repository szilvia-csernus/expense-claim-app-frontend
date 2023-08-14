import { useState } from "react";

const useInput = (validateInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateInput(enteredValue);
    const hasError = (valueIsValid === false) && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = () => {
       setIsTouched(true);
    }

    const reset = () => {
       setEnteredValue('');
       setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
}

export const useFileInput = (validateInput) => {

    const [fileValue, setFileValue] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isTouched, setIsTouched] = useState(false);

    const fileChangeHandler = (event) => {
        setFileValue(event.target.value);
        setUploadedFiles([...uploadedFiles, event.target.value]);
    }

    const removeFile = (file) => {
        setUploadedFiles(
            currValue => currValue.filter(item => item !== file)
        )
    }

    const valueIsValid = validateInput(fileValue);
	const hasError = valueIsValid === false && isTouched;

    const fileBlurHandler = () => {
			setIsTouched(true);
    };

    const reset = () => {
       setFileValue('');
       setUploadedFiles([]);
       setIsTouched(false);
    }

    return {
			fileValue,
			uploadedFiles,
			isValid: valueIsValid,
			hasError,
			fileChangeHandler,
            fileBlurHandler,
			removeFile,
			reset,
		};
}

export default useInput