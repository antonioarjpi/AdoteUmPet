import { Skeleton } from 'primereact/skeleton';
import './styles.css'

function PetCardAdoptSkeleton() {

    window.onload = function () {
        window.scrollTo(0, 150)
    }

    return (
        <div className="card">
            <div className="imgBx">
                <Skeleton borderRadius='0' height="100%" />
            </div>
        </div>
    )
}

export default PetCardAdoptSkeleton;