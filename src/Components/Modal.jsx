import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thankYouMessageActions } from '../store/thank-you-message-slice';
import { errorMessageActions } from '../store/error-message-slice';

import classes from './Modal.module.css';

const Backdrop = () => {
	const thankYouMessage = useSelector((state) => state.thankYouMessage);
	const errorMessage = useSelector((state) => state.errorMessage.status);

	const dispatch = useDispatch();
	
	const clickHandler = () => {
		thankYouMessage && dispatch(thankYouMessageActions.close());
		errorMessage && dispatch(errorMessageActions.close());
	};

	return <div className={classes.backdrop} onClick={clickHandler}/>;
};

const Overlay = (props) => {
	return <div className={classes.overlay}>{props.children}</div>;
};

const Canvas = (props) => {
	return <div className={classes.canvas}>{props.children}</div>;
}


const Modal = (props) => {
	const portalElement = document.getElementById('overlay');
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<Overlay >
					<Canvas >{props.children}</Canvas>
				</Overlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
