
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import Paralax from "../../components/Paralax";
import Parceiros from "../../components/Parceiros";
import Pets from "../../components/Pets";

function Home(){
    return(
        <>
            <Navbar />
            <Carousel />
            <Paralax />
            <Pets />
            <div className="container">
                <Link to={"/adotados"}> 
                <h4>Confira nossos pets já resgatados </h4>
                </Link>
            </div>
            

            <Parceiros />
            <Footer />
        </>
       
    )
}
export default Home;  