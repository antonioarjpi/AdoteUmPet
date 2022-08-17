import { PetsPage } from "../../types/pets";
import './styles.css'

type Props = {
    page: PetsPage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {
    return (
        <>
            <div className="pets-pagination-container">
                <div className="pets-pagination-box">
                    <button className="pets-pagination-button" onClick={() => onChange(page.number - 1)} disabled={page.first} >
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                    <button className="pets-pagination-button" onClick={() => onChange(page.number + 1)} disabled={page.last} >
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Pagination;