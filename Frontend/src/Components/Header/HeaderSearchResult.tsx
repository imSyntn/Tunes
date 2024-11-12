import React from 'react'
import { ResultsInDataType } from '../../App.types'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Header/HeaderSearchResult.scss'
// import { songIdContext } from '../App';

interface HeaderSearchResultProps {
    headerName: string;
    inputText: string,
    result: ResultsInDataType[];
    setSearchClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderSearchResult: React.FC<HeaderSearchResultProps> = ({ headerName, inputText, result, setSearchClicked }) => {

    const navigate = useNavigate()

    const headerNameCapital = headerName.toUpperCase();

    return (
        <>
            {
                (result.length != 0) && (
                    <div className='HeaderSearchResult'>
                        <div className="top">
                            <h5>{headerNameCapital}</h5>
                            {
                                !(headerNameCapital==='TOPQUERY') && (
                                    <button onClick={()=> {
                                        navigate(`/search/${headerName}/${inputText}`)
                                        setSearchClicked(false)
                                    }}>View all</button>
                                )
                            }
                        </div>
                        {
                            result.map((item:ResultsInDataType) => (
                                <div className="container" key={item.id} onClick={() => {
                                    navigate(`/${item.type}/${item.id}`);
                                    setSearchClicked(false)
                                }}>
                                    <img src={item?.image?.[0].url || '../../music.png'} alt="" />
                                    <div className="detaiils">
                                        <p className='mainName'>{item.title}</p>
                                        <p>{(item.description && item.description.length > 25) ? item.description.slice(0, 25) + ' ...' : item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default HeaderSearchResult