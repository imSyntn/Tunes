import { useNavigate } from 'react-router-dom'
import '../../Styles/Home/TrendingCards.scss'
// import { useNameDot } from '../../Utils/useNameDot'

const TrendingCards = ({ data, userData }: any) => {

    const navigate = useNavigate()
    // const nameWithDot = useNameDot()

    return (
        <div className='TrendingCards' onClick={() => navigate(`/${data.type}/${userData ? data.dataId : data.id}`)}>
            <img src={data.image || '../../../music.png'} alt="" />
            <p>{data.title}</p>
            <p>{data.type}</p>
        </div>
    )
}

export default TrendingCards