import {  } from 'react'
// import { Context } from '../Context/Context';
import { useAppContext } from '../Context/ContextProvider';
import { ResultsInDataType } from '../App.types';
import { motion } from 'framer-motion'
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import '../Styles/ImgAlbumDetails.scss'
import Heart from './Heart';

const ImgAlbumDetails = ({ data, audioSet }: { data: ResultsInDataType, audioSet: () => void }) => {

  const { user, setUser } = useAppContext();

  return (
    <div className="img-albumDetails">
      {
        (data.image?.[2]?.url || data.image?.[1]?.url || data.image?.[0]?.url) && (
          <>
            <img src={data.image?.[2]?.url || data.image[1].url || data.image[0].url || '../../music.png'} alt={data.name || 'Album cover'} />
            <img className='wrapper' src={data.image?.[2]?.url || '../../music.png'} alt={'img wrapper'} />
          </>
        )
      }
      <div className="albumDetails">
        <h1>{data.name}</h1>
        <p>{data.description || data.copyright}</p>
        <p>{data.label} {data.year}</p>
        <p>{data.playCount ? `${data.playCount}  plays` : ''}</p>
        <p>{data.songCount ? `${data.songCount}  Songs` : ''}</p>
        <div className="btns">
          <motion.button whileTap={{ scale: 0.7 }} transition={{ duration: 0.01 }} onClick={() => audioSet()}>Play</motion.button>

          <Heart user={user} setUser={setUser} result={data} type={data.type} />
          
        </div>
      </div>
    </div>
  )
}

export default ImgAlbumDetails