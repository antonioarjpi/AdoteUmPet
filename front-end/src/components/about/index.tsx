import Team from "../Team";
import Partners from "../Partners";
import "./styles.css"


function About(){

    return(
        <>
      <link href='https://fonts.googleapis.com/css?family=Wire+One|Raleway:300' rel='stylesheet' type='text/css'></link>

            <div className="skew-c"></div>
            <div className="colour-block">
            <h1 className="title-about">Quem somos</h1>
            <p>A AdoteUmPet, constituída em 19 de abril de 2022, é uma plataforma online de adoção de pets. <br/>
            Nosso propósito é providenciar um serviço excepcional, missão que estabelecemos desde o Primeiro dia e que se mantém até hoje. <br/>
            A nossa equipe entende o valor da adoção de animais, por isso nossa equipe faz de tudo para que sua experiência de adoção seja simples, fácil e seguro.
            </p>
            </div>
            <div className="skew-cc"></div>
            <div className="container">
                <Team/>
            </div>
            <div className="skew-c" id='parceiros'></div>
            <div className="colour-block">
            <Partners />
            </div>
           
                
        
        </>
)
}

export default About;
