import {useNavigate} from 'react-router-dom'
import '../Styles/Artists.scss'

const Artists = ({ data }: any) => {
    
    return (
        <div className="artists">
            {
                data?.artists?.primary ? (
                    data.artists.primary.map((item: any) => (
                        <ArtistCont item={item} key={item.id} />
                    ))
                ) : (
                    data?.artists?.filter(
                        (artist: any, index: number, self: any[]) =>
                            index === self.findIndex((t) => t.id === artist.id)
                    )?.map((item: any) => (
                        <ArtistCont item={item} key={item.id} />
                    ))
                )
            }
        </div>
    )
}

export default Artists;

const ArtistCont = ({ item }: any) => {

    const navigate = useNavigate()

    return (
        <div className="artistCont" onClick={()=> navigate(`/artist/${item.id}`)}>
            <img src={item?.image?.[1]?.url || '../../music.png'} alt="" />
            <p>{item.name}</p>
        </div>
    )
}