import LogoAltist from "../assets/img/Logo.png"
import "../assets/style/footer.css"

function Footer() {
    return(
        <footer className="footer">

            <p >© 2022 ShonCompany, Inc</p>

            <a href="/"><img src={LogoAltist}></img></a>
            <ul>
                <li ><a href="./index.html">Home</a></li>
                <li ><a href="https://github.com/ShonSagoro/VitePrueba" target="_blank">Git_Hub</a></li>
            </ul>

        </footer>
    );
}

export default Footer;