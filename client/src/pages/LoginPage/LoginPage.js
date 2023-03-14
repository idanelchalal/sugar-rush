import { useState, useEffect } from 'react'
import './LoginPage.css'
import { useNavigate, useActionData } from 'react-router-dom'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const LoginContainer = styled.section.attrs((props) => ({
    imageHeight: props.imageHeight,
}))`
    background: url(${require('../../images/bg.jpg')});
    background-size: cover;
    padding: 50px;
    width: auto;
    overflow: hidden;
    height: 100svh;
    max-height: ${(props) => props.imageHeight};
`

const LoginPage = () => {
    // AFTER SUBMITTING THE FORM RETREVIENG DATA
    const data = useActionData()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [loggedIn, setLoggedIn] = useState({})
    console.log('dasds')
    useEffect(() => {
        // DETERMINES IF LOGGED IN WITH THE RETREVEIVED DATA WAS SUCCESS.
        let timeOut
        if (data) {
            if (!data.ok) {
                setLoggedIn({})
                if (data.data === 'USERNAME_INCORRECT')
                    setErrors({ message: "The username doesn't exist." })
                else if (data.data === 'PASSWORD_INCORRECT')
                    setErrors({ message: 'Password incorrect.' })
                else {
                    setErrors({ message: 'Unkown error occurred.' })
                }
            }

            if (data.ok) {
                setErrors({})
                setLoggedIn({ message: 'Logged in successfully!' })
                localStorage.setItem('token', JSON.stringify(data.token))
                timeOut = setTimeout(() => navigate('/'), 2000)
            }
        }
        return () => {
            clearTimeout(timeOut)
        }
    }, [data, navigate])

    return (
        <LoginContainer imageHeight={window.innerHeight + 'px'}>
            <div className="login-window">
                <div className="left-login-window">
                    <div className="left-login-header">SUGAR RUSH</div>
                    <div className="left-login-greet">
                        <blockquote>
                            <h3>Welcome Back</h3>
                            Thank you for getting back, please login by filling
                            the form below.
                        </blockquote>
                    </div>
                    {errors && (
                        <span className="left-login-window_note error">
                            {errors.message}
                        </span>
                    )}

                    {loggedIn && (
                        <span className="left-login-window_note success">
                            {loggedIn.message}
                        </span>
                    )}
                    <LoginForm />
                </div>

                <div className="right-login-window"></div>
            </div>
        </LoginContainer>
    )
}

export default LoginPage

export const action = async ({ request }) => {
    const formData = await request.formData()
    const form = {
        username: formData.get('username'),
        password: formData.get('password'),
        isRememberChecked: formData.get('isRememberChecked'),
    }
    try {
        return await fetch(process.env.REACT_APP_API + '/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...form }),
        })
    } catch (err) {
        return err
    }
}
