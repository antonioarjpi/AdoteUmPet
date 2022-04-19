import axios from "axios";
import { useEffect, useState } from "react";
import { PetsPage } from "../../types/pets";
import { BASE_URL } from "../../utils/request";
import Pagination from "../Pagination";
import PetCard from "../PetCard";
import PetCardAdopt from "../PetCardAdopt";

function Listing(){
    
    const [pageNumber, setPageNumber] = useState(0);

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
        axios.get(`${BASE_URL}/pets?size=10`)
        .then(response => {
            const data = response.data as PetsPage;
            setPage(data);

        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number ) => {
        setPageNumber(newPageNumber);
    }

     

    
    return(
        <>      
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(pets => (
                        <>
                        {pets.adotado === true ?(
                              <div key={pets.id} className="col-sm-6 col-lg-4 col-xl-4 mb-3">

                              <PetCardAdopt pets={pets} />
                        
                          </div>    
                        ):(
                            <></>
                        )    
                }
                        </>
                    ))}
                </div>
            </div>           
        </>

    )
}

export default Listing;