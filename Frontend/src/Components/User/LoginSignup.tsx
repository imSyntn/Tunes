import { useState } from 'react'
import '../../Styles/User/LoginSignup.scss'

const LoginSignup = ({ userRegistered, userLoggedIn }: { userRegistered: () => void, userLoggedIn: () => void }) => {

    const [uiData, setUiData] = useState({
        password: false,
        login: false,
        msg: ''
    })
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const handleUserAction = async (e: any) => {
        e.preventDefault()
        const baseUrl = uiData.login ? `http://localhost:8000/api/user/login` : `http://localhost:8000/api/user`
        try {
            const req = await fetch(baseUrl, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            const res = await req.json()

            if (res.msg) {
                setUiData(prev => ({ ...prev, msg: res.msg }))
            }

            if (!uiData.login && res.id) {
                userRegistered()
                setUiData(prev => ({ ...prev, msg: '' }))
            }
            if (uiData.login && res.loggedIn) {
                userLoggedIn()
                setUiData(prev => ({ ...prev, msg: '' }))
            }

            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='LoginSignup'>
            <div className="form-container">
                <p className="title">{uiData.login ? 'Login' : 'Signup'}</p>

                <p className='error'>{uiData.msg}</p>

                <form className="form" onSubmit={handleUserAction}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" required={true} name="email" id="email" placeholder="Enter email" value={userInfo.email} onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" required={true} name="password" id="password" placeholder="Enter password" value={userInfo.password} onChange={(e) => setUserInfo(prev => ({ ...prev, password: e.target.value }))} />
                        {/* <div className="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div> */}
                    </div>
                    <button className="sign" type='submit'>{uiData.login ? 'Login' : 'Signup'}</button>
                </form>
                <p className="change">{uiData.login ? "Don't have an account ?" : "Have an account ?"}
                    <button onClick={() => setUiData(prev => ({ ...prev, login: !uiData.login }))}>{uiData.login ? 'Signup' : 'Login'}</button>
                </p>
            </div>
            <img src="../../../login.svg" alt="" />
        </div>
    )
}

export default LoginSignup