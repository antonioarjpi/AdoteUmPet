import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import FormCard from '../../components/Form';
import Navbar from '../../components/NavBar';



function Form(){

    const params = useParams();

    return(
        <>
        <Navbar />
        <FormCard petId={`${params.petId}`} />
        <Footer />
        </>
    )
}

export default Form;