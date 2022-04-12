import ParceiroPedigree from '../../assets/parceiros/pedigree.svg'
import ParceiroBomGuy from '../../assets/parceiros/royal.png'

function Parceiros(){
    return(
        <body className='container' >
            <div className="row"> 
                <h1 className="align-text-top" id='parceiros'>Nossos parceiros</h1>
            <div className="col-sm-2 col-lg-2 col-xl-2">
                <img src={ParceiroPedigree} width={200} />
            </div>       
            <div className="col-sm-2 col-lg-2 col-xl-2">
                <img src={ParceiroBomGuy} width={200} />                
            </div>  
            <div className="col-sm-2 col-lg-2 col-xl-2">
                <img src={ParceiroPedigree} width={200} />
            </div>  

            <div className="col-sm-2 col-lg-2 col-xl-2">
                <img src={ParceiroPedigree} width={200} />
            </div>  
            <div className="col-sm-2 col-lg-2 col-xl-2">
                <img src={ParceiroPedigree} width={200} />
            </div>  
            <div className="col-sm-2 col-lg-2 col-xl-2">
                <img src={ParceiroPedigree} width={200} />                
            </div>   
             
         
            </div> 
        </body>
    )
} 

export default Parceiros;