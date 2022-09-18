import Logo from '../assets/img/Logo.png'
import PresentationImg from '../assets/img/Presentation.png'
import '../assets/style/presentation.css'

function Presentation() {
    return(
        <div className='presentation'>
            <p>Altist</p>
            <img src={Logo} className="Logo"></img>
            <span>Blog de recomendaciones de artistas digitales, en el cual podras econtrar sus redes sociales y algunas de sus obras, esta pagina esta siendo administrada por ShonLapDev.</span>
            <a href='#mas'><button>Ver mas</button></a>
            <img src={PresentationImg} className="ref"></img>
        </div>
    );
}

export default Presentation;