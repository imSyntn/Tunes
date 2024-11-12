import { useState, useEffect } from 'react'
import { useFetch } from '../../Utils/useFetch'
import SongCard from '../SongCard'
import AlbumThumbnail from '../AlbumThumbnail'
import { ResultsInDataType } from '../../App.types'
import '../../Styles/ArtistRoute/DynamicContent.scss'

interface DynamicContentPropType {
  type: string,
  id: string,
  childToParentDataSend: (params: ResultsInDataType[]) => void,
  childData: ResultsInDataType[],
  setTracks: React.Dispatch<React.SetStateAction<ResultsInDataType[]>>,
  tracks: ResultsInDataType[]
}

const DynamicContent: React.FC<DynamicContentPropType> = ({ type, id, childToParentDataSend, childData, setTracks, tracks }) => {
  const [page, setPage] = useState<number>(0)

  const fetchUrl = `${import.meta.env.VITE_DATA_URL}/api/artists/${id}/${type}?page=${page}`

  const { loading, error, data } = useFetch(fetchUrl)
  const [totalData, setTotalData] = useState<ResultsInDataType[]>([])
  // const loading = true
  useEffect(() => {
    if (data && Array.isArray((data as ResultsInDataType)[type as keyof ResultsInDataType])) {
      setTotalData((prev: ResultsInDataType[]) => {
        let updatedData: ResultsInDataType[];

        let newData: any = (data as ResultsInDataType)[type as keyof ResultsInDataType]

        if (prev.length == 0) {
          updatedData = [...newData]
        } else {
          updatedData = [...prev, ...newData]
        }
        return updatedData;
      });
    }
  }, [data]);

  useEffect(() => {
    setTotalData([])
    setPage(0)
  }, [type, id])


  useEffect(() => {
    if (data && Array.isArray((data as ResultsInDataType)[type as keyof ResultsInDataType]) && type == 'songs') {
      if (childData.length == 0) {
        childToParentDataSend(totalData)
      } else {
        if (tracks.length != 0) {
          let newData: any = (data as ResultsInDataType)[type as keyof ResultsInDataType]
          const allData = [...tracks, ...newData]
          const withoutDuplicates = allData.filter((item: ResultsInDataType, index: number, ref: ResultsInDataType[]) => index === ref.findIndex(t => t.id === item.id))
          setTracks(withoutDuplicates)
        }
      }
    }
  }, [totalData])



  // if (loading) {
  //   return <p className='Loading-Error'>Loading.</p>
  // }
  // if (error) {
  //   return <p className='Loading-Error'>Error in loading.</p>
  // }

  return (
    <div className='DynamicContent'>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      {
        <div className={type == 'albums' ? 'albumCont' : ''}>
          {
            totalData?.map((item: ResultsInDataType) => (
              (type === 'songs') ? (
                <SongCard key={item.id + (Math.random() * 1000)} result={item} />
              ) : (
                <AlbumThumbnail key={item.id + (Math.random() * 1000)} result={item} />
              )
            ))
          }
        </div>
      }
      {
        !loading && !error && (
          <div className="load">
            <button onClick={() => setPage(prev => prev + 1)}>Load more</button>
          </div>
        )
      }
    </div>
  )
}

export default DynamicContent