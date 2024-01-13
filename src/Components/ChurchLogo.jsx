import classes from './Form.module.css';

import rotterdamLogoUrl from '../images/rotterdamLogo.png';
import delftLogoUrl from '../images/delftLogo.png';
import { useSelector } from 'react-redux';

const ChurchLogo = () => {
	const churchValue = useSelector((state) => state.selectChurch.church);
    const logo =  (
    <img
			src={
				churchValue === 'Rotterdam'
					? rotterdamLogoUrl
					: churchValue === 'Delft'
					? delftLogoUrl
					: ''
			}
			width="270"
			height="80"
			className={classes.churchLogo}
			alt="church logo"
		></img>
    )
	return <>{churchValue && logo}</>;
};

export default ChurchLogo;
