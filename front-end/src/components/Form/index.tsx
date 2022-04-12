import axios, { AxiosRequestConfig } from 'axios';
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

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                score: score
              
            }
        }

        axios(config).then(response => {
            navigate("/")
        });
        
    }
    

    return(
        <div className="movie-form-container" id='topo' >
            <img className="movie-movie-card-image" src={pet?.imagem1} alt={pet?.nome} />
            <div className="movie-card-bottom-container" id='card'>
                <h3>{pet?.nome}</h3>
                <form className="movie-form" onSubmit={handleSubmit}>
                    <div className="form-group movie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group movie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movie-form-btn-container">
                        <button type="submit" className="btn btn-primary movie-btn" onClick={() => navigate(-1)}>Salvar</button>
                    </div>
                </form >

                <Link to="/">
                    <button className="btn btn-primary movie-btn mt-3" onClick={() => navigate(-1)}>Cancelar</button>
                </Link>
                
            </div >
        </div >
    )
}

export default FormCard;