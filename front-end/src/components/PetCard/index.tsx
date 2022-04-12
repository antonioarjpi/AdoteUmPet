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
        <div>
        <img className="movie-movie-card-image" src={pets.imagem1} alt={pets.nome} />
        <div className="movie-card-bottom-container">
            <h4>{pets.nome}</h4>
            <Link to={`/form/${pets.id}`}>
                <a className="btn btn-primary pet-btn" href="#header">Adotar</a>
            </Link>
            
        </div>
    </div>   
    )
}

export default PetCard;