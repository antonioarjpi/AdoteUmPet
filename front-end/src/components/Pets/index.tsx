import About from '../about';
import Listing from '../Listing';
import ListingAdopt from '../ListingAdopt';
import "./styles.css"


function Pets(){
    return(
        <body>
            <div className='container align-middle mt-5'>
            <div className="row">
                <h2>Animais prontos para receberem um lar <i className='fas fa-grin-beam'></i></h2> 
            <Listing />  
            
                <h2 className='mt-5'>Veja quem já adotou <i className='fas fa-grin-hearts'></i></h2> 
            <ListingAdopt />  
            <About /> 
            </div> 
            </div>
    </body>
    )
}

export default Pets;