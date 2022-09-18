
import Presentation from "./Presentation";
import Artist from "./Artist";
import '../assets/style/main.css';

function Main() {
    return(
        <main className="main">
            <section>
                <Presentation></Presentation>
                <Artist></Artist>
            </section>
        </main>
    )
}

export default Main;