
import CardArtist from "./CardArtist"
import listArtists from "../data/DataArtist"
import '../assets/style/artist.css'
    

function Artist() {
    const artists=listArtists;
    return(
        <div className="container" id='mas'>
            <h2>Lista de Artistas</h2>
            
            {artists.map((artist)=>{
                return(
                    <CardArtist
                    name={artist.name}
                    desc={artist.desc}
                    profile={artist.profilePic}
                    art1={artist.art1}
                    art2={artist.art2}
                    art3={artist.art3}
                    twitterAccount={artist.twitterAccount}
                    instagramAccount={artist.instagramAccount}
                />
                )
                   
            })}
        </div>
    );
}


export default Artist