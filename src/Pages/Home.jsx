import Header from '../Components/Header';
import CostForm from '../Components/CostForm';
import Footer from '../Components/Footer';
import { Container } from '../Components/Container';
import { useSelector } from 'react-redux';
import ThankYouMessage from '../Components/ThankYouMessage';
import ErrorMessage from '../Components/ErrorMessage';

function Home() {
    const thankYouMessage = useSelector(state => state.thankYouMessage)
    const errorMessage = useSelector(state => state.errorMessage)
    return (
        <Container>
            <Header />
            {thankYouMessage && <ThankYouMessage/>}
            {errorMessage && <ErrorMessage/>}
            {!thankYouMessage && !errorMessage && <CostForm />}
            <Footer />
        </Container>
    )
}

export default Home;