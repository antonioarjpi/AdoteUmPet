
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
                                            <select className='form-select' id="raca" required>
                                                    <option disabled hidden selected>Raça</option>
                                                        <option>	Vira-lata	 </option>
                                                        <option>	Akita	 </option>
                                                        <option>	Basset hound	 </option>
                                                        <option>	Beagle	 </option>
                                                        <option>	Bichon frisé	 </option>
                                                        <option>	Boiadeiro australiano	 </option>
                                                        <option>	Border collie	 </option>
                                                        <option>	Boston terrier	 </option>
                                                        <option>	Boxer	 </option>
                                                        <option>	Buldogue francês	 </option>
                                                        <option>	Buldogue inglês	 </option>
                                                        <option>	Bull terrier	 </option>
                                                        <option>	Cane corso	 </option>
                                                        <option>	Cavalier king charles spaniel	 </option>
                                                        <option>	Chihuahua	 </option>
                                                        <option>	Chow chow	 </option>
                                                        <option>	Cocker spaniel inglês	 </option>
                                                        <option>	Dachshund	 </option>
                                                        <option>	Dálmata	 </option>
                                                        <option>	Doberman	 </option>
                                                        <option>	Dogo argentino	 </option>
                                                        <option>	Dogue alemão	 </option>
                                                        <option>	Fila brasileiro	 </option>
                                                        <option>	Golden retriever	 </option>
                                                        <option>	Husky siberiano	 </option>
                                                        <option>	Jack russell terrier	 </option>
                                                        <option>	Labrador retriever	 </option>
                                                        <option>	Lhasa apso	 </option>
                                                        <option>	Lulu da pomerânia	 </option>
                                                        <option>	Maltês	 </option>
                                                        <option>	Mastiff inglês	 </option>
                                                        <option>	Mastim tibetano	 </option>
                                                        <option>	Pastor alemão	 </option>
                                                        <option>	Pastor australiano	 </option>
                                                        <option>	Pastor de Shetland	 </option>
                                                        <option>	Pequinês	 </option>
                                                        <option>	Pinscher	 </option>
                                                        <option>	Pit bull	 </option>
                                                        <option>	Poodle	 </option>
                                                        <option>	Pug	 </option>
                                                        <option>	Rottweiler	 </option>
                                                        <option>	Schnauzer	 </option>
                                                        <option>	Shar-pei	 </option>
                                                        <option>	Shiba	 </option>
                                                        <option>	Shih tzu	 </option>
                                                        <option>	Staffordshire bull terrier	 </option>
                                                        <option>	Weimaraner	 </option>
                                                        <option>	Yorkshire	 </option>

                                                </select>


                                            
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <select className='form-select' id="tipo" required>
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

                                    <div className="col-md-5">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Email' id="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Telefone' id="contato" />
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-group"> 
                                            <input type="text" className="form-control" placeholder='Cidade' id="cidade" />
                                        </div>
                                    </div>

                                   
                                    <div className="col-md-1">
                                        <div className="form-group" >
                                            <select className='form-select' id="estado" required>
                                                <option disabled hidden selected>UF</option>
                                                <option value="AC">Acre</option>
                                                <option value="AL">Alagoas</option>
                                                <option value="AP">Amapá</option>
                                                <option value="AM">Amazonas</option>
                                                <option value="BA">Bahia</option>
                                                <option value="CE">Ceará</option>
                                                <option value="DF">Distrito Federal</option>
                                                <option value="ES">Espírito Santo</option>
                                                <option value="GO">Goiás</option>
                                                <option value="MA">Maranhão</option>
                                                <option value="MT">Mato Grosso</option>
                                                <option value="MS">Mato Grosso do Sul</option>
                                                <option value="MG">Minas Gerais</option>
                                                <option value="PA">Pará</option>
                                                <option value="PB">Paraíba</option>
                                                <option value="PR">Paraná</option>
                                                <option value="PE">Pernambuco</option>
                                                <option value="PI">Piauí</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="RN">Rio Grande do Norte</option>
                                                <option value="RS">Rio Grande do Sul</option>
                                                <option value="RO">Rondônia</option>
                                                <option value="RR">Roraima</option>
                                                <option value="SC">Santa Catarina</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="SE">Sergipe</option>
                                                <option value="TO">Tocantins</option>    
                                            </select>
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