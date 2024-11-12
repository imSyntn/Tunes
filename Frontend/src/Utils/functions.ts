import React from "react"
import { userType } from "../App.types"


type setUserType = React.Dispatch<React.SetStateAction<userType>>


export function blockDevtools () {
    document.addEventListener('contextmenu', (e)=> {
        e.preventDefault()
    })

    document.addEventListener('keydown', (e) => {
        if(e.key === 'F12') {
            e.preventDefault()
        }
        if((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault()
        }
    })
}

export const handleAutoLogin = async (setUser: setUserType) => {
    const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/user/login`
    try {
      const req = await fetch(baseUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await req.json()

      if (res.loggedIn) {
        setUser({ loggedIn: true, registered: false, userSavedData: {}, updated: 0 })
      }
    //   console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  export const fetchUserData = async (setUser: setUserType) => {
    try {
      const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/data`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await req.json()
      setUser({ loggedIn: true, registered: false, userSavedData: res, updated: 0 })
    //   console.log(res)
    } catch (error) {
      console.log(error)
    }
  }