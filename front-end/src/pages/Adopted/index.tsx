import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import ListingAdopt from "../../components/ListingAdopt";
import Navbar from "../../components/NavBar";

function Adopted(){

    const params = useParams();

    return(
        <>
        <Navbar />
        <ListingAdopt />
        <Footer />
        </>
    )
}


export default Adopted;