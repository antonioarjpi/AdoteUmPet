
import { Skeleton } from 'primereact/skeleton';
import '../PetCard/styles.css'


function PetCardSkeleton() {

    window.onload = function () {
        window.scrollTo(0, 150)
    }

    return (
        <div className="a-box">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <Skeleton height="100%" />
                    </div>
                </div>
            </div>
            <div className="text-container">
                <h3><Skeleton width="100%" height="59.3924px" /></h3>
                <h6><Skeleton height='19.2014px' /></h6>
                <a className="btn btn-primary disabled pet-btn " href="#header">Quero Adotar</a>
            </div>
        </div>
    )
}

export default PetCardSkeleton;