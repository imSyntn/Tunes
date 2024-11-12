import { useNavigate } from 'react-router-dom'
import { ResultsInDataType } from '../App.types'
import '../Styles/PlaylistThumbnail.scss'

const PlaylistThumbnail = ({ result }: { result: ResultsInDataType }) => {
    const navigate = useNavigate()
    return (
        <div className='PlaylistThumbnail' onClick={() => navigate(`/playlist/${result.id}`)}>
            <div className="imgWrapperInPlaylistThumbnail">
                <img src={result?.image?.[1]?.url || '../../music.png'} alt="" />
            </div>
            <h4>{result?.name.length > 17 ? `${result?.name.slice(0, 17) + '...'}` : `${result?.name}`}</h4>
        </div>
    )
}

export default PlaylistThumbnail