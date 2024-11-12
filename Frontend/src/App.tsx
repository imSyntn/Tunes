import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Player from './Components/Player'
import Loader from './Components/Loader'
import { ResultsInDataType } from './App.types'
import Footer from './Components/Footer/Footer'
import { useAppContext } from './Context/ContextProvider'
import Modal from './Components/Modal'

const Main = lazy(() => import('./Components/Main'))
const Home = lazy(() => import('./Components/Home/Home'))
const NoData = lazy(() => import('./Components/NoData'))
const AlbumQuerryPage = lazy(() => import('./Components/AlbumRoute/AlbumQuerryPage'))
const SongQuerryPage = lazy(() => import('./Components/SongRoute/SongQuerryPage'))
const ArtistQuerryPage = lazy(() => import('./Components/ArtistRoute/ArtistQuerryPage'))
const PlaylistQuerryPage = lazy(() => import('./Components/PlaylistRoute/PlaylistQuerryPage'))
const SearchQuerryPage = lazy(() => import('./Components/SearchRoute/SearchQuerryPage'))
const User = lazy(() => import('./Components/User/User'))

import { 
  // blockDevtools, 
  fetchUserData, handleAutoLogin } from './Utils/functions'


function App() {

  const { tracks, setTracks, songIndex, setSongIndex, user, setUser, limitExceed } = useAppContext()

  useEffect(() => {  

    // blockDevtools()

    const cookie = document.cookie

    if (cookie) {
      handleAutoLogin(setUser)
    }

    const storedTracks = localStorage.getItem('tunes-tracks')
    const storedSongIndex = localStorage.getItem('tunes-song-index')

    if (storedTracks) {
      setTracks((JSON.parse(storedTracks) as ResultsInDataType[]))
      if (storedSongIndex) {
        setSongIndex(JSON.parse(storedSongIndex))
      }
    }
  }, [])

  useEffect(() => {
    if (user.loggedIn) {
      fetchUserData(setUser)
    }
  }, [user.loggedIn, user.updated])

  useEffect(() => {
    if (Array.isArray(tracks)) {
      localStorage.setItem('tunes-tracks', JSON.stringify(tracks))
    }
  }, [tracks])

  useEffect(() => {
    localStorage.setItem('tunes-song-index', JSON.stringify(songIndex))
  }, [songIndex])



  return (
    <BrowserRouter>
      <Header />

      {
        limitExceed && <Modal />
      }

      <Routes>
        <Route path='/' element={<Main />}>
          {/* so that Every component renders inside main and footer always stays at bottom */}

          <Route index element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
          <Route path='album/:id' element={<Suspense fallback={<Loader />}><AlbumQuerryPage /></Suspense>} />
          <Route path='song/:id' element={<Suspense fallback={<Loader />}><SongQuerryPage /></Suspense>} />
          <Route path='artist/:id' element={<Suspense fallback={<Loader />}><ArtistQuerryPage /></Suspense>} />
          <Route path='playlist/:id' element={<Suspense fallback={<Loader />}><PlaylistQuerryPage /></Suspense>} />

          <Route path='search/:searchType/:querry' element={<Suspense fallback={<Loader />}><SearchQuerryPage /></Suspense>} />

          <Route path='user' element={<Suspense fallback={<Loader />}><User /></Suspense>} />

          <Route path='*' element={<Suspense fallback={<Loader />}><NoData /></Suspense>} />
        </Route>
      </Routes>
      <Player />
      <Footer />
    </BrowserRouter>
  )
}

export default App