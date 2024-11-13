import React, { memo,useEffect } from 'react'
import { useFetch } from '../.././Utils/useFetch';
import SongCard from '../SongCard';
import { ResultsInDataType } from '../../App.types';

interface SimilarSongPropType {
  id: string,
  setAllSongData: React.Dispatch<React.SetStateAction<ResultsInDataType[]>>
}

const SimilarSongs: React.FC<SimilarSongPropType> = ({id,setAllSongData}) => {
    
    const fetchUrl = `/api/songs/${id}/suggestions?limit=10`;
    const { loading, error, data } = useFetch(fetchUrl);

    useEffect(()=> {
      if(!loading && !error && Array.isArray(data)) {
        setAllSongData((prev: ResultsInDataType[])=> [...prev,...(data as ResultsInDataType[])])
      }
    },[data])

    if (loading) return <p style={{textAlign: 'center'}}>Loading...</p>;

  return (
    
    <div className='SimilarSongs' style={{marginBottom: '20px'}}>
      {
        (!error && Array.isArray(data) ) && (
          data.map((item) => (
            <SongCard key={(item as ResultsInDataType).id} result={(item as ResultsInDataType)} />
          ))
        )
      }
    </div>
  )
}

export default memo(SimilarSongs)