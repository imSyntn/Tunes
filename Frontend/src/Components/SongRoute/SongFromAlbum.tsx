import { ResultsInDataType } from '../../App.types';
import { useFetch } from '../../Utils/useFetch';
import { useNavigate } from 'react-router-dom'
import '../../Styles/SongRoute/SongFromAlbum.scss'
import { memo } from 'react';

const SongFromAlbum = ({id, currentSongId}: {id:string, currentSongId:string}) => {

    const fetchUrl = `/api/albums?id=${id}`;
    const { loading, error, data } = useFetch(fetchUrl);

    const navigate = useNavigate()

  return (
    
    <div className='SongFromAlbum'>
        {
            !loading && !error && data && !Array.isArray(data) && (
                <>
                {
                    data?.songs?.filter((item: ResultsInDataType) => item.id !== currentSongId).map((item:ResultsInDataType)=> (
                        <div className="songInAlbum" key={item.id} onClick={()=> navigate(`/song/${item.id}`)}>
                            <img src={item.image?.[1]?.url || '../../../music.png'} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
                </>
            )
        }
    </div>
  )
}

export default memo(SongFromAlbum)