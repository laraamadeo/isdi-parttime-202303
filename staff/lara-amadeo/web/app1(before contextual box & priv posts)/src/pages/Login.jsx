import { context, errorToast, generateToast } from "../ui.js"
import { authenticateUser } from '../logic/authenticateUser.js'
import './Login.css'

export default function Login({ onSignUpLink, onLoginButton }) {
    function handleRegisterClick(event) {
        event.preventDefault()

        onSignUpLink()
    }

    function handleLogin(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, userId) => {
                if (error){
                    generateToast({
                        message: error.message,
                        type: errorToast,
                    })

                    return
                }
                context.userId = userId 

                onLoginButton()
            })
        } catch (error) {
            generateToast({
                message: error.message,
                type: errorToast,
            })
        } finally {
            event.target.password.value = ''
        }
    }

    return <div className="login">
        <div className="centered-containers">

            <h1 className="title">Welcome back!</h1>

            <form className="centered-form" onSubmit={handleLogin}>
                <label htmlFor="email" className="text-field-label">Email</label>
                <input type="text" name="email" className="text-field" />

                <label htmlFor="password" className="text-field-label">Password</label>
                <input type="password" name="password" className="text-field" />

                <button className="button-S primary-button" type="submit">Log in</button>

                <div className="create-account">
                    <p className="body-text">New to <strong>Helio</strong>?</p><a href="" className="link sign-in" onClick={handleRegisterClick}>Sign in</a>
                </div>
            </form>
        </div>
    </div>
}