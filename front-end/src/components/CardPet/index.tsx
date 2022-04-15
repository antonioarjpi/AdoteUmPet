
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

        
        <div className="container mt">

            <form onSubmit={handleSubmit} id="contact_form">
                <div className="name">
               
                    <input type="text" placeholder='Nome' id="nome" />
                </div>

                <div className="email">
                    <input type="email" placeholder='Raça' id="raca" />
                </div>

                <div className="subject">
                <label htmlFor="tipo"></label>
                <select placeholder="Subject line" name="subject" id="tipo" required>
                    <option disabled hidden selected>Espécie</option>
                    <option>Gato</option>
                    <option>Cachorro</option>
                   
                </select>
                </div>

                <div className="name">
                    <input type="text" placeholder='Peso' id="peso" />
                </div>

                <div className="email"> 
                    <input type="text" placeholder='Local' id="local" />
                </div>

                <div className="name">
                    <input type="email" placeholder='Imagem Capa' id="imagem1" />
                </div>

                <div className="email">
                    <input type="text" placeholder='Imagem Extra'  id="imagem2" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder='Imagem Extra'  id="imagem3" />
                </div>

                <div className="btn">
                    <button type="submit"  onClick={() => navigate(-1)} >Cadastrar </button>
                </div>

                <Link to="/">
                <button className="btn btn-danger pet-btn mt-3" onClick={() => navigate(-1)}>Cancelar</button>
                </Link>
            </form >

           
            
        
    </div >
    

    )
}

export default CardPet;