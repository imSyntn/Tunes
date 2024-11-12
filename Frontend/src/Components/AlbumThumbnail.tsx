import { useNavigate } from 'react-router-dom'
import { ResultsInDataType } from '../App.types'
import '../Styles/AlbumThumbnail.scss'

const AlbumThumbnail = ({ result }: { result: ResultsInDataType }) => {
    const navigate = useNavigate()
    return (
        <div className='AlbumThumbnail' onClick={() => navigate(`/album/${result.id}`)}>
            <div className="imgWrapperInAlbumThumbnail">
                <img src={result?.image?.[1]?.url || '../../music.png'} alt="" />
            </div>
            <h4>{result?.name.length > 17 ? `${result?.name.slice(0, 17) + '...'}` : `${result?.name}`}</h4>
            <p>{result?.year}</p>
        </div>
    )
}

export default AlbumThumbnail