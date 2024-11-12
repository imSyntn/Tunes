import { memo } from 'react'
import { useAppContext } from '../../Context/ContextProvider'
import '../../Styles/User/UserData.scss'
import SavedData from './SavedData'
// import { userDataType } from '../../App.types'


const UserData = ({ userLoggedOut }: { userLoggedOut: () => void }) => {

  const {user} = useAppContext()


  return (
    <div className='UserData'>
      <div className="top">
        <h1>Hello<span>!</span></h1>
        <button onClick={userLoggedOut}>Logout</button>
      </div>
      {
        (user.userSavedData && 'songs' in user.userSavedData) && (
          <>
            <SavedData result={user.userSavedData.songs} type='songs' />
            <SavedData result={user.userSavedData.albums} type='albums' />
            <SavedData result={user.userSavedData.playlists} type='playlists' />
          </>
        )
      }
    </div>
  )
}

export default memo(UserData)