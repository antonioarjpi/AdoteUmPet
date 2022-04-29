import { Link } from "react-router-dom";
import { Pets } from "../../types/pets";
import '../PetCard/styles.css'

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
                        <img src={pets.image} alt={pets.name} />
                        </div>
                    </div>
                </div>
        <div className="text-container">
            <h3>{pets.name}</h3>
            <h6>{pets.user.city}, {pets.user.state}</h6>
            <Link to={`/form/${pets.id}`}>
                <a className="btn btn-primary pet-btn" href="#header">Quero Adotar</a>
            </Link>
            
        </div>
        </div>
    
     
    )
}

export default PetCard;