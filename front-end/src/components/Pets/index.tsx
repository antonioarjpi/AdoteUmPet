import ParceiroBomGuy from '../../assets/img2.jpg'

function Pets(){
    return(
        <body>
        <div className="row"> 
            <h1 className="align-text-top">Um pet próximo de você</h1>
        <div className="col-sm-2 col-lg-2 col-xl-2">
            <img src={ParceiroBomGuy} width={200} />                
        </div>   
        <div className="col-sm-2 col-lg-2 col-xl-2">
            <img src={ParceiroBomGuy} width={200} />                
        </div>    
        <div className="col-sm-2 col-lg-2 col-xl-2">
            <img src={ParceiroBomGuy} width={200} />                
        </div>    
        <div className="col-sm-2 col-lg-2 col-xl-2">
            <img src={ParceiroBomGuy} width={200} />                
        </div>    
        <div className="col-sm-2 col-lg-2 col-xl-2">
            <img src={ParceiroBomGuy} width={200} />                
        </div>    
        <div className="col-sm-2 col-lg-2 col-xl-2">
            <img src={ParceiroBomGuy} width={200} />                
        </div>             
        </div> 
    </body>
    )
}

export default Pets;