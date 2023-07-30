import Header from '../Components/Header';
import CostForm from '../Components/CostForm';
import Footer from '../Components/Footer';
import { Container } from '../Components/Container';

function Home() {
    return (
        <Container>
            <Header />
            <CostForm />
            <Footer />
        </Container>
    )
}

export default Home;