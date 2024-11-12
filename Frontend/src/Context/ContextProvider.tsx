import { ReactNode, createContext, useState, useContext } from 'react'
import { ResultsInDataType, userType } from '../App.types'


interface ContextType {
    tracks: ResultsInDataType[] | [],
    setTracks: React.Dispatch<React.SetStateAction<ResultsInDataType[]>>,
    currentSongObj: ResultsInDataType | null,
    setCurrentSongObj: React.Dispatch<React.SetStateAction<ResultsInDataType | null>>,
    songIndex: number,
    setSongIndex: React.Dispatch<React.SetStateAction<number>>,
    user: userType,
    setUser: React.Dispatch<React.SetStateAction<userType>>,
    limitExceed: boolean,
    setLimitExceed: React.Dispatch<React.SetStateAction<boolean>>
}


export const Context = createContext<ContextType | undefined>(undefined)

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [tracks, setTracks] = useState<ResultsInDataType[] | []>([])
    const [currentSongObj, setCurrentSongObj] = useState<ResultsInDataType | null>(null) // for song card playing animation
    const [songIndex, setSongIndex] = useState<number>(0)
    const [limitExceed, setLimitExceed] = useState(false)
    const [user, setUser] = useState<userType>({
        loggedIn: false,
        registered: false,
        userSavedData: {},
        updated: 0
    })

    return (
        <Context.Provider value={{ tracks, setTracks, currentSongObj, setCurrentSongObj, songIndex, setSongIndex, user, setUser, limitExceed, setLimitExceed }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    const appContext = useContext(Context)

    if (appContext === undefined) {
        throw new Error('Context not Found.')
    }

    return appContext;
}