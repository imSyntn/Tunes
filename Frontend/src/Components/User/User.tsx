// import { useContext } from 'react'
import '../../Styles/User/User.scss'
import LoginSignup from './LoginSignup'
import UserData from './UserData'
import { useAppContext } from '../../Context/ContextProvider'

const User = () => {

  // const userContext = useContext(Context)

  // if (!userContext) {
  //   return null
  // }

  const { user, setUser } = useAppContext()

  const userRegistered = () => {
    setUser(prev => ({ ...prev, registered: true }))
  }
  const userLoggedIn = () => {
    setUser({ loggedIn: true, registered: false, userSavedData: {}, updated: 0})
  }
  const userLoggedOut = async () => {
    try {
      const req = await fetch('http://localhost:8000/api/user/logout', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await req.json()
      console.log(res)
      setUser({ loggedIn: false, registered: false , userSavedData: {}, updated: 0})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='User'>
      {
        user.registered && <p className='userRegistered'>LogIn to continue</p>
      }
      {
        !user.loggedIn ? (
          <LoginSignup userRegistered={userRegistered} userLoggedIn={userLoggedIn} />
        ) : (
          <UserData userLoggedOut={userLoggedOut} />
        )
      }
    </div>
  )
}

export default User