import classes from './Header.module.css';
// import { ReactComponent as Logo } from '../images/logo.svg'
import imageUrl from '../images/logo.png';

function Header() {
    return (
        <header>
            <img src={imageUrl} width="270" height="80" className={classes.logo} alt="logo"></img>
        </header>
    )
}

export default Header;