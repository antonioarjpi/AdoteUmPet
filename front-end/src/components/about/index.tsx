import "./styles.css"


function About(){

    return(
        <>


                <h2 className="mt-2">Nosso Time</h2>
                <div className="row mt-4">

                <div className="column">
                <div className="center">
                    <div className="property-card">
                        <a href="#">
                        <div className="property-image">
                            <div className="property-image-title">
                            
                            </div>
                        </div></a>
                        <div className="property-description">
                        <h5> Antônio </h5>
                        <p>Desenvolvedor full-stack Java/React na AdoteUmPet.</p>
                        </div>
                        <a href="#">
            
                        </a>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="center">
                    <div className="property-card">
                        <a href="#">
                        <div className="property-image-carla">
                            <div className="property-image-title-carla">
                            
                            </div>
                        </div></a>
                        <div className="property-description">
                        <h5> Carla </h5>
                        <p>CEO e diretora do AdoteUmPet.</p>
                        </div>
                        <a href="#">
        
                        </a>
                    </div>
                    </div>
                </div>

                <div className="column">
                <div className="center">
                    <div className="property-card">
                        <a href="#">
                        <div className="property-image-matheus">
                            <div className="property-image-title-matheus">
                            
                            </div>
                        </div></a>
                        <div className="property-description">
                        <h5> Matheus </h5>
                        <p>Gerente de projeto e analista de dados da AdoteUmPet.</p>
                        </div>
                        <a href="#">
               
                        </a>
                    </div>
                    </div>
                </div>
            </div>   
        </>
)
}

export default About;
