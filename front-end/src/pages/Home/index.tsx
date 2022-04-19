
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

            <Parceiros />
            <Footer />
        </>
       
    )
}
export default Home;  