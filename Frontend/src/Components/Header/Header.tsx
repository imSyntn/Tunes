import { useEffect, useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegUser, FaSearch, FaUserAlt } from "react-icons/fa";
import HeaderSearchResult from './HeaderSearchResult';
// import { useFetch } from '../Utils/useFetch';
import { useAppContext } from '../../Context/ContextProvider';
import { globalSearchResultType } from '../../App.types';
import Loader from '../Loader';
import { motion } from 'framer-motion'
import '../../Styles/Header/Header.scss'
// import { globalSearchResultType } from '../App.types';

// const Y = 50;

const Header = () => {

    const [searchClicked, setSearchClicked] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>('')
    const [data, setData] = useState<globalSearchResultType | []>([])
    const [resOptions, setResOptions] = useState({
        loading: false,
        blank: false
    })
    const [visible, setVisible] = useState(true)

    const inputRef = useRef<HTMLInputElement>(null)
    const timer = useRef<number | null>(null)

    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const getData = async () => {
            // setLoading(true)
            setResOptions(prev => ({ ...prev, loading: true }))
            if (inputText) {
                try {
                    const req = await fetch(`/api/search?query=${inputText}`)
                    const res = await req.json()
                    setData(res.data)
                } catch (error: any) {
                    console.log(error.message)
                } finally {
                    // setLoading(false)
                    setResOptions(prev => ({ ...prev, loading: false }))
                }
            } else {
                setData([])
                // setLoading(false)
                setResOptions(prev => ({ ...prev, loading: false }))
            }
        }
        if (timer.current !== null) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(getData, 500)
    }, [inputText])

    useEffect(() => {
        // setBlank(false)
        setResOptions(prev => ({ ...prev, blank: false }))
        if (!Array.isArray(data)) {
            let counter = 0;
            Object.keys(data).forEach((item: string) => {
                const result = data[item as keyof globalSearchResultType].results;
                if (result.length == 0) {
                    counter++
                }
            });
            if (counter == 5) {
                // setBlank(true)
                setResOptions(prev => ({ ...prev, blank: true }))
            }
        }
    }, [data])

    // const userContext = useContext(Context)

    // if (!userContext) {
    //     return null
    // }

    const { user } = useAppContext()

    return (
        <header>
            <motion.h1 whileTap={{ scale: 0.5 }} onClick={() => navigate('/')}>
                <div className="imgWrapper">
                    <img src="../../musicTransparent.png" alt="" />
                </div>
                Tunes
            </motion.h1>
            <motion.div style={{ borderColor: '#2ec0a1c7' }}
                initial={{ opacity: 1 }} animate={{
                    opacity: visible ? 1 : 0, pointerEvents: visible ? 'initial' : 'none'
                }} transition={{ duration: 0.3 }}
                className={`inputWrapper ${searchClicked ? 'activeInputWrapper' : ''}`} onClick={() => {
                    setSearchClicked(true);
                    inputRef.current?.focus()
                }}>
                <div className="top">
                    <FaSearch />
                    <p>Search</p>
                    <input type="text" ref={inputRef} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText} />

                    <svg className='cross' width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" onClick={(e) => {
                        e.stopPropagation()
                        setSearchClicked(false)
                    }}>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-570.000000, -1089.000000)" fill="#2bc5b4"> <path d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z" id="cross-circle"> </path> </g> </g> </g>
                    </svg>
                </div>
                {
                    searchClicked && (
                        <div className='bottom' onClick={e => e.stopPropagation()}>
                            {
                                resOptions.loading ? (
                                    <Loader black={true} />
                                ) : (
                                    (Array.isArray(data)) ? (
                                        <h2>Search...</h2>
                                    ) : (
                                        <>
                                            {
                                                Object.keys(data).map((item: string, index: number) => (
                                                    <HeaderSearchResult headerName={item} inputText={inputText} result={data[item].results} key={index} setSearchClicked={setSearchClicked} />
                                                ))
                                            }
                                            {
                                                resOptions.blank && (
                                                    <h2>No results.</h2>
                                                )
                                            }
                                        </>
                                    )
                                )
                            }
                        </div>
                    )
                }
            </motion.div>
            <motion.div className="user" whileTap={{ scale: 0.5 }}
                onClick={() => navigate('/user')} >
                {
                    user.loggedIn ? (
                        <img src="https://raw.githubusercontent.com/imSyntn/PaceFit/refs/heads/main/src/Assets/profile.gif" alt="" />
                    ) : (
                        (location.pathname == '/user') ? (
                            <FaUserAlt style={{ fill: '#43ffd3' }} />
                        ) : (
                            <FaRegUser />
                        )
                    )
                }
            </motion.div>
        </header>
    )
}

export default Header