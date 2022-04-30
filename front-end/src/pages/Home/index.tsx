
import About from "../../components/about";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Listing from "../../components/Listing";
import ListingAdopt from "../../components/ListingAdopt";
import Navbar from "../../components/NavBar";
import Paralax from "../../components/Paralax";
import './styles.css'

function Home(){
    return(
        <>
            <Navbar />
            <Paralax />
            <body>
            <Carousel />
                <div className='container align-middle mt-5'>
                    
                    <div className="row">
                        
                        <h2 className="brush">Animais prontos para receberem um lar <i className='fas fa-grin-beam'></i></h2> 
                        <Listing />  
                        
                    </div> 
                </div>           
                    
                    <h2 className='mt-5 brush'>Veja os bichinhos que já foram adotados <i className='fas fa-grin-hearts'></i></h2> 
                    <div className='container'>
                        <div className="row">
                            <ListingAdopt />  
                        </div>   
                    </div>         
            </body>
                <About />        
            
            <Footer />
        </>
       
    )
}
export default Home;  