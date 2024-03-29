import axios from "axios";
import { useEffect, useState } from "react";

import { PetsPage } from "../../types/pets";
import { BASE_URL } from "../../utils/request";
import Pagination from "../Pagination";
import PetCardAdopt from "../PetCardAdopt";
import PetCardAdoptSkeleton from "../PetCardAdopt/index-skeleton";

function ListingAdopt() {

    const [loading, setLoading] = useState(false);
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
        setLoading(true)
        axios.get(`${BASE_URL}/pets/search?adopted=true&size=3&page=${pageNumber}`)
            .then(response => {
                const data = response.data as PetsPage;
                setPage(data);
                setTimeout(() => {
                    setLoading(false);
                }, 800);
            })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />
            {loading ? (
                <>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-3 align-middle">
                        <PetCardAdoptSkeleton />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-3 align-middle">
                        <PetCardAdoptSkeleton />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-3 align-middle">
                        <PetCardAdoptSkeleton />
                    </div>
                </>
            ) : (
                <>
                    {page.content.map(pets => (
                        <div key={pets.id} className="col-sm-6 col-lg-4 col-xl-4 mb-3 align-middle">
                            <PetCardAdopt pets={pets} />
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default ListingAdopt;