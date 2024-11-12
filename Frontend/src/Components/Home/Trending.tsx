import TrendingCards from './TrendingCards'
import { useFetch } from '../../Utils/useFetch'
import Loader from '../Loader'

const Trending = () => {

    const { loading, error, data } = useFetch(`${import.meta.env.VITE_BACKEND_URL}/api/trending-now`)

    if(loading) return <Loader />

    return (

        <div className='Trending'>
            <h1>Trending now</h1>
            <section>
                {
                    (!error && data && Array.isArray(data)) ? (
                        data.slice(0,15).map((item:any) => (
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

export default Trending