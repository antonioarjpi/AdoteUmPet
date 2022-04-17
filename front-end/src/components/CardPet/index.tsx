
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

        <>
        <div className="contact-wrap w-100 p-md-5 p-4 mt-5">						
            <div id="form-message-warning" className="mb-4"></div> 
                    <div id="form-message-success" className="mb-4">
                    Your message was sent, thank you!
                    </div>
                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <div className="dbox w-100 d-flex align-items-start">
                                <div className="text">
                                
                                </div>
                            </div>
                                </div>

                            </div>
                            <form method="POST" id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                    <h5 className="mb-2">Informações do pet</h5>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="nome" id="nome" placeholder="Nome" />
                                        </div>
                                    </div>
                                    <div className="email">
                    <input type="text"  className="form-control"placeholder='Raça' id="raca" />
                </div>

                <div className="form-group">
                <label htmlFor="tipo"></label>
                <select placeholder="Subject line" id="tipo" required>
                    <option disabled hidden selected>Espécie</option>
                    <option>Gato</option>
                    <option>Cachorro</option>
                   
                </select>
                </div>

                <div className="col-md-12">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Peso' id="peso" />
                </div>
                </div>

                <div className="form-group"> 
                    <input type="text" className="form-control" placeholder='Local' id="local" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Imagem Capa' id="imagem1" />
                </div>

                <div className="form-group">
                    <input type="text"  className="form-control" placeholder='Imagem Extra'  id="imagem2" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Imagem Extra'  id="imagem3" />
                </div>



                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="submit" value="Cadastrar" className="btn btn-primary mr-3"/>
                                            <Link to="/">
                                                <input type="button" value="Cancelar" className="btn btn-danger"/>
                                            </Link>
                                            
                                            <div className="submitting"></div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
</>

    )
}

export default CardPet;