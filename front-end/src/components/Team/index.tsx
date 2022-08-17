import "./styles.css"

function Team() {
    return (
        <>
            <h2 className="mt-2 mb-5 brush">Quem faz parte do time</h2>
            <div className="row mt-4">
                <div className="column mb-5">
                    <div className="center">
                        <div className="property-card">
                            <div className="property-image">
                                <div className="property-image-title">
                                </div>
                            </div>
                            <div className="property-description">
                                <h5> Antônio </h5>
                                <p>Desenvolvedor full-stack na AdoteUmPet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column mb-5">
                    <div className="center">
                        <div className="property-card">

                            <div className="property-image-carla">
                                <div className="property-image-title-carla">
                                </div>
                            </div>
                            <div className="property-description">
                                <h5> Carla </h5>
                                <p>Diretora na AdoteUmPet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column mb-5">
                    <div className="center">
                        <div className="property-card">
                            <div className="property-image-matheus">
                                <div className="property-image-title-matheus">

                                </div>
                            </div>
                            <div className="property-description">
                                <h5> Matheus </h5>
                                <p>Gerente de projeto e AdoteUmPet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;
