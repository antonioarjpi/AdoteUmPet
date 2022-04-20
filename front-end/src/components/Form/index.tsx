import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pets } from '../../types/pets';
import { BASE_URL } from '../../utils/request';


import "../Form/styles.css"




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
        const cidade = (event.target as any).cidade.value;
		const estado = (event.target as any).estado.value;
		const contato = (event.target as any).contato.value;
	
        

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/pets/usuario/adotar/'+petId,
            data: {
                nome: nome,
                email: email,
                cidade: cidade,
				contato: contato,
				estado: estado
              
            }
        }

       

        axios(config).then(response => {
            navigate("/")
        });
        
    }
    

    return(
    <section className="ftco-section mt-5">
		<div className="container">
			<div className="row justify-content-center">
		    </div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-6">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3>Informações de contato</h3>
									<div id="form-message-warning" className="mb-4"></div> 
                                <div id="form-message-success" className="mb-4">
                                Your message was sent, thank you!
                                </div>
									<div className="row mb-4">
										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>Nome do pet:</span> {pet?.nome} </p>
							          			</div>
						            		</div>
										</div>

                                        <div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>Peso:</span> {pet?.peso} KG</p>
							          			</div>
						          			</div>
										</div>

										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>Raça:</span> {pet?.raca}</p>
							          			</div>
						          			</div>
										</div>

										<div className="col-md-12">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>Nome do Dono:</span> {pet?.usuario.nome}</p>
							          			</div>
						          			</div>
										</div>

										<div className="col-md-6">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>E-mail:</span> {pet?.usuario.email}</p>
							          			</div>
						          			</div>
										</div>

                                        <div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>Telefone:</span> {pet?.usuario.contato}</p>
							          			</div>
						          			</div>
										</div>

										<div className="col-md-12">
											<div className="dbox w-100 d-flex align-items-start">
						        				<div className="text">
							            			<p><span>Cidade - UF:</span> {pet?.usuario.cidade} - {pet?.usuario.estado}</p>
							          			</div>
						            		</div>
										</div>		
									</div>

									<form method="POST" id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit}>
										<div className="row">
                                            
											<div className="col-md-12">
												<h5 className="mb-2">Preencha formulário abaixo para enviar a adoção</h5>
												<div className="form-group">
													<input type="text" className="form-control" name="nome" id="nome" placeholder="Nome" />
												</div>
											</div>
											
											<div className="col-md-12"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="contato" id="contato" placeholder="Telefone"/>
												</div>
											</div>

											<div className="col-md-8">
												<div className="form-group">
													<input type="text" className="form-control" name="cidade" id="cidade" placeholder="Cidade"/>
												</div>
											</div>

											<div className="col-md-4">
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
													<input type="submit" value="Adotar" className="btn btn-primary mr-3"/>
                                                    <Link to="/">
                                                        <input type="button" value="Cancelar" className="btn btn-danger"/>
                                                    </Link>
                                                    
													<div className="submitting"></div>
                                                    
												</div>
                                                
											</div>
                                            
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-6 d-flex align-items-stretch">
								<img className='pets' src={pet?.imagem} alt={pet?.nome} />
			                    
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default FormCard;