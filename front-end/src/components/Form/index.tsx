import axios, { AxiosRequestConfig } from 'axios';
import { url } from 'inspector';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Pets } from '../../types/pets';
import { BASE_URL } from '../../utils/request';


import './styles.css';




type Props = {
    petId: string;
}

function FormCard( {petId } : Props){

    const navigate = useNavigate();

    const [pet, setPet] = useState<Pets>();

    useEffect(() => {
        axios.get(`${BASE_URL}/pets/${petId}`)
            .then(response => {
                setPet(response.data);
            });
    }, [petId]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const email = (event.target as any).email.value;
        const local = (event.target as any).local.value;
        

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/pets/usuario/adotar/'+petId,
            data: {
                nome: nome,
                email: email,
                local: local
              
            }
        }

       

        axios(config).then(response => {
            navigate("/")
        });
        
    }
    

    return(
        <div className="pet-form-container" id='topo' >
            <img className="pet-card-image" src={pet?.imagem1} alt={pet?.nome} />
            <div className="pet-card-bottom-container" id='card'>
                <h3>{pet?.nome}</h3>
                <h6>Localizado: {pet?.local}</h6>
                <h6>Raça: {pet?.raca}</h6>
                <h6>Peso: {pet?.peso} KG</h6>
                <form className="pet-form" onSubmit={handleSubmit}>
                    <div className="form-group pet-form-group">
                        <label htmlFor="nome">Informe seu nome</label>
                        <input type="nome" className="form-control" id="nome" />
                    </div>
                    <div className="form-group pet-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group pet-form-group">
                        <label htmlFor="local">Onde você mora?</label>
                        <input type="local" className="form-control" id="local" />
                    </div>


                    
                    <button type="submit" className="btn btn-primary pets-btn" onClick={() => navigate(-1)}>Salvar</button>
                   
                    <Link to="/">
                    <button type="button" className="btn btn-primary pets-btn mt-3" onClick={() => navigate(-1)}>Cancelar</button>
                    </Link>
                </form >

              
                
            </div >
        </div >
    )
}

export default FormCard;