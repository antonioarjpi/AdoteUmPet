import ParceiroPedigree from '../../assets/parceiros/pedigree.svg'
import ParceiroBomGuy from '../../assets/parceiros/bomguy.png'
import ParceiroPetShop from '../../assets/parceiros/petshop.png'
import ParceiroPop from '../../assets/parceiros/popfeliz.jpg'
import ParceiroPatudos from '../../assets/parceiros/patudos.png'
import ParceiroTribo from '../../assets/parceiros/tribo.png'
import './styles.css';

function Parceiros(){
    return(
        <body className='container' >
            <div className="row"> 
                <h1 className="align-text-top" id='parceiros'>Nossos parceiros</h1>    
            <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                <img src={ParceiroPedigree} width={200} />
            </div>       
            <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                <img src={ParceiroBomGuy} width={200} />                
            </div>  
            <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                <img src={ParceiroPetShop} width={200} />
            </div>  

            <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                <img src={ParceiroPop} width={200} />
            </div>  
            <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                <img src={ParceiroPatudos} width={200} />
            </div>  
            <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                <img src={ParceiroTribo} width={200} />                
            </div>   
             
         
            </div> 
        </body>
    )
} 

export default Parceiros;