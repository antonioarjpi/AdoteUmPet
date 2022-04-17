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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#parceiros">Parceiros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contatos">Contatos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apoie nossa causa</a>
              </li>
            </ul>
            <Link to={"/cadastrarpet"}>
            <button type="button" className="btn btn-outline-warning" >Cadastre seu pet</button>
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;