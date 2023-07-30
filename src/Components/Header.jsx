import classes from './Header.module.css';

function Header() {
    return (
        <header>
            <div>
                <img className={classes.logo} src="https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2.png" 
                srcSet="https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2.png 3200w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-300x94.png 300w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-1030x322.png 1030w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-768x240.png 768w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-1536x480.png 1536w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-2048x640.png 2048w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-1500x469.png 1500w, 
                https://www.redeemerdelft.nl/wp-content/uploads/2022/05/white-2-705x220.png 705w" 
                sizes="(max-width: 3200px) 100vw, 3200px" height="100" width="300" 
                alt="Redeemer International Church Delft" title="white"></img>
            </div>
        </header>
    )
}

export default Header;