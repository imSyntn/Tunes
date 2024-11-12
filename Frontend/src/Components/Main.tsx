import { Outlet, useLocation } from 'react-router-dom'
import '../Styles/Main.scss'
import { useEffect } from 'react'

const Main = () => {

    const { pathname } = useLocation()

    useEffect(()=> {
        window.scrollTo(0, 0)
    },[pathname])

    return (
        <main>
            <Outlet />
        </main>
    )
}

export default Main