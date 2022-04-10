import axios from "axios";
import { useEffect, useState } from "react";
import { PetsPage } from "../../types/pets";
import { BASE_URL } from "../../utils/request";
import Pagination from "../Pagination";
import PetCard from "../PetCard";

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
        axios.get(`${BASE_URL}/pets?size=8&page=${pageNumber}`)
        .then(response => {
            const data = response.data as PetsPage;
            setPage(data);
            console.log(data)
        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number ) => {
        setPageNumber(newPageNumber);
    }

    
    return(
        <>      
        <body>
            
        
        <div className="movie-pagination-container">
            </div>
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(pets => (
                        <div key={pets.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <PetCard pets={pets} />
                        </div>
                    ))}
                </div>
    
            </div>
            </body>            
        </>

    )
}

export default Listing;