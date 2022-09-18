import LogoAltist from "../assets/img/Logo.png"
import "../assets/style/footer.css"

function Footer() {
    return(
        <footer className="footer">

            <p >© 2022 Company, Inc</p>

            <a href="/"><img src={LogoAltist}></img></a>
            <ul>
                <li ><a href="#">Home</a></li>
                <li ><a href="#">Features</a></li>
                <li ><a href="#">Pricing</a></li>
                <li ><a href="#">FAQs</a></li>
                <li ><a href="#">About</a></li>
            </ul>

        </footer>
    );
}

export default Footer;