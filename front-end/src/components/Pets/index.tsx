import ParceiroBomGuy from '../../assets/img2.jpg'
import Listing from '../Listing';
import PetCard from '../PetCard';

function Pets(){
    return(
        <body>
            <div className='container'>
        <div className="row"> 
            <h1 className="align-text-top">Um pet próximo de você</h1>
            <Listing />
       
        </div> 
        </div>
    </body>
    )
}

export default Pets;