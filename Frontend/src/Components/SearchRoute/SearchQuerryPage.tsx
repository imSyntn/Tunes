import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../Utils/useFetch'
import { useAbc } from '../../Utils/useAbc'
import { ResultsInDataType } from '../../App.types'
import SongCard from '../SongCard'
import AlbumThumbnail from '../AlbumThumbnail'
import PlaylistThumbnail from '../PlaylistThumbnail'
import '../../Styles/SearchRoute/SearchQuerryPage.scss'

const SearchQuerryPage = () => {

    const { searchType, querry } = useParams()
    const navigate = useNavigate()

    if (!searchType || !querry) {
        return
    }

    const searchTypeCapital = useAbc(searchType)
    const querryCapital = useAbc(querry)

    const [page, setPage] = useState<number>(1)
    const [totalData, setTotalData] = useState<ResultsInDataType[] | []>([])

    const fetchUrl = `/api/search/${searchType}?query=${querry}&page=${page}&limit=50`;
    const { loading, error, data } = useFetch(fetchUrl)


    useEffect(() => {
        if (data && !Array.isArray(data) && Array.isArray(data.results)) {
            setTotalData((prev: ResultsInDataType[]) => ([...prev, ...(data.results as ResultsInDataType[])]))
        }
    }, [data])

    useEffect(()=> {
        setPage(1)
        setTotalData([])
    },[searchType, querry])


    const handleScroll = useCallback(()=> {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        if((clientHeight + scrollTop >= (scrollHeight - 200)) && !loading) {
            setPage((prev:number)=> prev+1)
        }
    },[loading, searchType, querry])

    const debounceFunction = (func: Function, delay: number) => {
        let timer:any;
        return () => {
            clearTimeout(timer)
            timer = setTimeout(func,delay)
        }
    }

    useEffect(()=> {
        const debouncedHandleScroll = debounceFunction(handleScroll, 100)
        window.addEventListener('scroll', debouncedHandleScroll)

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll)
        }
    },[handleScroll, debounceFunction])

    // if (loading) {
    //     return <Loader />
    // }
    if (error) {
        return <p className='Loading-Error'>Error in loading.</p>
    }


    return (
        <div className='SearchQuerryPage'>
            <h1>Showing <span>{searchTypeCapital}</span> for <span>{querryCapital}</span></h1>
            <div className={`searchQuerryContainer ${!(searchType == 'songs') ? 'grid' : ''}`}>
                {
                    (totalData.length > 0) && (
                        <>
                            {
                                (searchType == 'songs') ? (
                                    totalData.map((item: ResultsInDataType) => (
                                        <SongCard result={item} key={item.id + (Math.random() * 1000)} />
                                    ))
                                ) : (searchType == 'albums') ? (
                                    totalData.map((item: ResultsInDataType) => (
                                        <AlbumThumbnail result={item} key={item.id + (Math.random() * 1000)} />
                                    ))
                                ) : (searchType == 'playlists') ? (
                                    totalData.map((item: ResultsInDataType) => (
                                        <PlaylistThumbnail result={item} key={item.id + (Math.random() * 1000)} />
                                    ))
                                ) : (searchType == 'artists') ? (
                                    totalData.map((item: ResultsInDataType) => (
                                        <div className="artistCont" onClick={() => navigate(`/artist/${item.id}`)} key={item.id + (Math.random() * 1000)}>
                                            <img src={item?.image?.[1]?.url || '../../../music.png'} alt="" />
                                            <p>{item.name}</p>
                                        </div>
                                    ))
                                ) : <p>No Data</p>
                            }
                        </>
                    )
                }
                {
                    loading && <p>Loading...</p>
                }
            </div>
        </div >
    )
}

export default SearchQuerryPage