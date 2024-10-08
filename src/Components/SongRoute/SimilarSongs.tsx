import React, { memo,useEffect } from 'react'
import { useFetch } from '../.././Utils/useFetch';
import SongCard from '../SongCard';
import { ResultsInDataType } from '../../App.types';

interface SimilarSongPropType {
  id: string,
  setAllSongData: React.Dispatch<React.SetStateAction<ResultsInDataType[]>>
}

const SimilarSongs: React.FC<SimilarSongPropType> = ({id,setAllSongData}) => {
    
    const fetchUrl = `https://savaan-api-eight.vercel.app/api/songs/${id}/suggestions?limit=10`;
    const { loading, error, data } = useFetch(fetchUrl);
    // const loading = true;

    // console.log(data)

    useEffect(()=> {
      if(!loading && !error && Array.isArray(data)) {
        setAllSongData((prev: ResultsInDataType[])=> [...prev,...(data as ResultsInDataType[])])
      }
    },[data])

    if (loading) return <p style={{textAlign: 'center'}}>Loading...</p>;
    // if (error) return <p className='Loading-Error'>Error loading album details.</p>;
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