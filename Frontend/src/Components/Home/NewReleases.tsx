import { useFetch } from '../../Utils/useFetch'
import Loader from '../Loader'
import TrendingCards from './TrendingCards'

const NewReleases = () => {

    // const [dataObj, setDataObj] = useState({
    //     data: [],
    //     loading: false,
    //     error: false
    // })

    const { loading, error, data } = useFetch(`http://localhost:8000/api/new-releases`)

    if (loading) return <Loader />


    return (

        <div className='NewReleases'>
            <h1>New releases</h1>
            <section>
                {
                    (!error && data && Array.isArray(data)) ? (
                        data.slice(0, 15).map((item: any) => (
                            <TrendingCards key={item.id} data={item} />
                        ))
                    ) : (
                        <p className='Loading-Error' style={{textAlign: 'center'}}>Something went wrong!</p>
                    )
                }
            </section>
        </div>
    )
}

export default NewReleases