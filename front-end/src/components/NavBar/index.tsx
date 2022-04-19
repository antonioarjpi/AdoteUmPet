import "./styles.css"
import Logo from '../../assets/AdoteUmPet.png'
import { Link } from "react-router-dom";

function Navbar(){
    return(  
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" height={90} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <Link to={"/"}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Início</a>
              </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#parceiros">Parceiros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contatos">Contatos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apoie nossa causa</a>
              </li>

              <li className="nav-item">
                <Link to={"/adotados"}> 
                  <a className="nav-link text-warning">Veja quem já tem um lar <i className="fa fa-heart"></i> </a>
                </Link>
              </li>

            </ul>
            <li className="nav-item">
            <Link to={"/cadastrarpet"}>
            <button type="button" className="nav-link btn btn-outline-warning " >Cadastre seu pet</button>
            </Link>
            </li>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;