import { useCallback } from 'react'
import { useformatTime } from '../Utils/useformatTime';
import { useNameDot } from '../Utils/useNameDot';
import { useAppContext } from '../Context/ContextProvider';
import { ResultsInDataType } from '../App.types';
import '../Styles/SongCard.scss'
import Heart from './Heart';

const SongCard = ({ result }: { result: ResultsInDataType }) => {

  // const songContext = useContext(Context)
  const formatTime = useformatTime()
  const nameWithDot = useNameDot()

  // if (!songContext) {
  //   return null
  // }

  const { currentSongObj, tracks, setTracks, setSongIndex, user, setUser } = useAppContext();


  const artistsNAme = result.artists?.primary?.map((acc: any) => ` ${acc.name}`).join(' ,')
  const ArtistChar = (artistsNAme) ? nameWithDot(artistsNAme) : ''

  // const addDot = (str:string) => {

  // }

  const audioSet = useCallback(() => {
    const index = tracks.findIndex((song: ResultsInDataType) => song.id === result.id)
    const available = (index < 0) ? false : true;
    if (available) {
      setSongIndex(index)
    } else {
      setTracks([result])
    }
  }, [tracks])


  return (
    <div className={`SongCard ${currentSongObj?.id == result.id ? 'playing' : ''}`} onClick={audioSet}>
      <h3>
        <div className="imgWrapperInSongCard">
          <img src={result?.image?.[0]?.url || '../../music.png'} />
        </div>
        <div className="names">
          {
            nameWithDot(result.name, 16)
          }
          <p>{ArtistChar}</p>
        </div>
      </h3>
      <p className='desktopView'>{ArtistChar}</p>

      <Heart user={user} setUser={setUser} result={result} type='song' />

      <span>{formatTime(result.duration || 0)}</span>
    </div>
  )
}

export default SongCard