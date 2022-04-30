import PartnersPedigree from '../../assets/parceiros/pedigree.svg'
import PartnersBomGuy from '../../assets/parceiros/bomguy.png'
import ParceiroPatudos from '../../assets/parceiros/patudos.webp'
import ParceiroTribo from '../../assets/parceiros/tribo.png'
import './styles.css';

function Partners(){
    return(
        <body className='parc' >
            <div className="row"> 
                <h1 className="align-middle title-about" >Nossos parceiros</h1>    
                <div className="col-sm-3 col-lg-3 col-xl-3 align-middle">
                    <img src={PartnersBomGuy} width={200} />
                </div>  

                <div className="col-sm-4 col-lg-3 col-xl-3 align-middle">
                    <img src={PartnersPedigree} width={200} />
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

export default Partners;