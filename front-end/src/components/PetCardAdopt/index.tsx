import { Link } from "react-router-dom";
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
        <article>
            <div className="box">
                <div className="card">
                    <div className="imgBx">
                        <img src={pets.imagem1} alt="images" />
                    </div>
                    <div className="details">
                        <h2>{pets.nome}<br /><span>{pets.local}</span></h2>
                    </div>
                </div>
            
            </div>
            </article>
    
     
    )
}

export default PetCardAdopt;