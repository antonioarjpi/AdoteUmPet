
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
        const imagem = (event.target as any).imagem.value;

        const cidade = (event.target as any).cidade.value;
        const estado = (event.target as any).estado.value;
        const nomeAdotante = (event.target as any).nomeAdotante.value;
        const email = (event.target as any).email.value;
        const contato = (event.target as any).contato.value;
  

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/pets',
            data: {
                nome: nome,
                tipo: tipo,
                peso: peso,
                raca: raca,
                imagem: imagem,
                cidade: cidade,
                estado: estado,

                nomeAdotante: nomeAdotante,
                contato: contato,
                email: email
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

                                    <div className="col-md-3">
                                        <div className="email">
                                            <input type="text"  className="form-control"placeholder='Raça' id="raca" />
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="tipo"></label>
                                            <select placeholder="Subject line" id="tipo" required>
                                                <option disabled hidden selected>Espécie</option>
                                                <option>Gato</option>
                                                <option>Cachorro</option>
                                            
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder='Peso' id="peso" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder='Link da Imagem' id="imagem" />
                                    </div>




                                    <div className="col-md-12">
                                    <h5 className="mb-2">Informações do Dono</h5>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="nomeAdotante" placeholder="Nome" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Email' id="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Telefone' id="contato" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Estado' id="estado" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Cidade' id="cidade" />
                                        </div>
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