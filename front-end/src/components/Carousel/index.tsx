import "./styles.css"

import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Logo from '../../assets/AdoteUmPet.png'

function Carousel (){
    return(
        <body className='container'> 
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={Img1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={Img2}alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={Img3} alt="Third slide"/>
                </div>
            </div>
            </div>
    </body>
    )
}

export default Carousel;