import { Link, useParams } from 'react-router-dom';
import FormCard from '../../components/Form';



function Form(){

    const params = useParams();

    return(
        <FormCard petId={`${params.petId}`} />
      
    )
}

export default Form;