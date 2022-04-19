import axios from "axios";
import { useEffect, useState } from "react";
import { Pets, PetsPage } from "../../types/pets";
import { BASE_URL } from "../../utils/request";
import Pagination from "../Pagination";
import PetCard from "../PetCard";
import PetCardAdopt from "../PetCardAdopt";

type pet = {
    pet: Pets;
}

function Listing(){
    
    const [pageNumber, setPageNumber] = useState(0);
    const [pets, setPets] = useState<Pets>({
       pet : []
    })

    const [page, setPage] = useState<PetsPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })
    
    
    useEffect(() => {
        axios.get(`${BASE_URL}/pets`)
        .then(response => {
            const data = response.data as Pets[];
    
        })
    }, [pageNumber]);

  
     

    
    return(
        <>      
            
            <div className="container">
                <div className="row">
                    {petss.adotado === true ? (
                        page.content.map(pets => (
                            <div key={pets.id} className="col-sm-4 col-lg-4 col-xl-4">
                            
                                <PetCardAdopt pets={pets} />
                                </div>
                                
                            ))):(
                            <PetCardAdopt pets={petss} />
                    )}
                        
                   
                </div>
            </div>           
        </>

    )
}

export default Listing;