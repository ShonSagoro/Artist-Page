import Logo from '../assets/img/Logo.png'
import '../assets/style/header.css'

function Header() {
    return(
        <header className='header'>
            <a><img src={Logo}></img></a>
            <ul>
                <li><a href='#'>List</a></li>
                <li><a href='#'>Top</a></li>        
                <li><a href='#'>Login</a></li>
            </ul>
        </header>
    );
}

export default Header

