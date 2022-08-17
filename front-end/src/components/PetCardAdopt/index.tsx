import { Pets } from "../../types/pets";
import './styles.css'

type Props = {
    pets: Pets;
}

function PetCardAdopt( { pets } : Props){

    window.onload = function(){
        window.scrollTo(0,150)
    }

    return(
        <div className="card">
            <div className="imgBx">
                <img src={pets.image} alt="images" />
            </div>
            <div className="details">
                <h2>{pets.name}
                <br /><span>{pets.adopter.firstName} está cuidando! </span></h2>
            </div>
        </div>
    )
}

export default PetCardAdopt;