import LogoTwitter from '../assets/img/twitter.png'
import LogoInstagram from '../assets/img/instagram.png'
import "../assets/style/cardArtist.css"

function CardArtist(props) {
    return(
        <div>
            <div className="cardArtist">
                <img src={props.profile}></img>
                <p>{props.name}</p>
                <span>{props.desc}</span> 
                <p className='socialMedia'>Redes</p>
                <div className='linkSocialMedia'>
                    <a href={props.twitterAccount} target='_blank'><img src={LogoTwitter}></img></a>
                    <a href={props.instagramAccount} target='_blank'><img src={LogoInstagram}></img></a>
                </div>
                {/* 
                <a href={props.urlTwitter}><img src={LogoTwitter}></a>
                preparar CSS
                <a href={props.urlInstagram}><img src={LogoInstagram}></a>

*/}
                
                
            </div>
            <div className="containerArtExample">   
                <img src={props.art1} className="exampleArt"></img>
                <img src={props.art2} className="exampleArt"></img>
                <img src={props.art3} className="exampleArt"></img>
            </div>
        </div>
    )
}

export default CardArtist