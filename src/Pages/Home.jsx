import Header from '../Components/Header';
import CostForm from '../Components/CostForm';
import Footer from '../Components/Footer';
import { Container } from '../Components/Container';
import { useSelector } from 'react-redux';
import ThankYouMessage from '../Components/ThankYouMessage';
import ErrorMessage from '../Components/ErrorMessage';
import Loader from '../Components/Loader';

function Home() {
    const thankYouMessage = useSelector(state => state.thankYouMessage)
    const errorMessage = useSelector(state => state.errorMessage)
    const sending = useSelector(state => state.costForm.sending)

    return (
        <Container>
            <Header />
            {sending && <Loader />}
            {thankYouMessage && <ThankYouMessage/>}
            {errorMessage && <ErrorMessage/>}
            {<CostForm />}
            <Footer />
        </Container>
    )
}

export default Home;