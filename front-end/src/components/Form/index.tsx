import axios, { AxiosRequestConfig } from 'axios';
import { url } from 'inspector';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

										<div className="col-md-4">
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

										<div className="col-md-6">
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

											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="cidade" id="cidade" placeholder="Cidade"/>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="estado" id="estado" placeholder="Estado"/>
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
								<img  src={pet?.imagem} alt={pet?.nome} width={600} height={681}/>
			                    
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