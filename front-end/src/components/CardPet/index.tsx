
import axios, { AxiosRequestConfig } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/request';
import './styles.css';

function CardPet(){


    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const tipo = (event.target as any).tipo.value;
        const peso = (event.target as any).peso.value;
        const raca = (event.target as any).raca.value;
        const local = (event.target as any).local.value;
        const imagem1 = (event.target as any).imagem1.value;
        const imagem2 = (event.target as any).imagem2.value;
        const imagem3 = (event.target as any).imagem3.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/pets',
            data: {
                nome: nome,
                tipo: tipo,
                peso: peso,
                raca: raca,
                local: local,
                imagem1: imagem1,
                imagem2: imagem2,
                imagem3: imagem3
            }
        }

        axios(config).then(response => {
            navigate("/")
        });
        
    }

    return(

        <div className="pet-form-container">

        <div className="pet-card-bottom-container-btn">
            <form className="pet-form" onSubmit={handleSubmit}>
                <div className="form-group pet-form-group">
                    <label htmlFor="nome">Nome do pet</label>
                    <input type="text" className="form-control" id="nome" />
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="tipo">Animal</label>
                    <select className="form-control form-control" id='tipo'>
                    <option>Cachorro</option>
                    <option>Gato</option>
                    </select>
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="peso">Peso</label>
                    <input type="text" className="form-control" id="peso" />
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="raca">Raça</label>
                    <input type="text" className="form-control" id="raca" />
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="local">Localidade</label>
                    <input className="form-control" id="local" />
                    <a href='https://www.thepetdb.org/' target={"_blank"}>Não sabe onde encontrar? </a>
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="imagem1">Imagem 1</label>
                    <input className="form-control" id="imagem1" />
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="imagem2">imagem1</label>
                    <input className="form-control" id="imagem2" />
                </div>

                <div className="form-group pet-form-group">
                    <label htmlFor="imagem3">imagem3</label>
                    <input className="form-control" id="imagem3" />
                </div>

                <div className="pet-form-btn-container">
                    <button type="submit" className="btn btn-primary pet-btn" onClick={() => navigate(-1)}>Salvar</button>
                </div>
            </form >

            <Link to="/">
                <button className="btn btn-primary pet-btn mt-3" onClick={() => navigate(-1)}>Cancelar</button>
            </Link>
            
        </div >
    </div >

    )
}

export default CardPet;