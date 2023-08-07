import classes from './Header.module.css';
import { ReactComponent as Logo } from '../images/logo.svg'

function Header() {
    return (
        <header>
            <Logo className={classes.logo} />
        </header>
    )
}

export default Header;