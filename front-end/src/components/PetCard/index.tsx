import { Link } from "react-router-dom";
import { Pets } from "../../types/pets";
import './styles.css'

type Props = {
    pets: Pets;
}


function PetCard( { pets } : Props){

    window.onload = function(){
        window.scrollTo(0,150)
    }

    return(
        <div className="a-box">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={pets.imagem} alt={pets.nome} />
                        </div>
                    </div>
                </div>
        <div className="text-container">
            <h3>{pets.nome}</h3>
            <h6>{pets.usuario.cidade}</h6>
            <Link to={`/form/${pets.id}`}>
                <a className="btn btn-primary pet-btn" href="#header">Quero Adotar</a>
            </Link>
            
        </div>
        </div>
    
     
    )
}

export default PetCard;