import { useState } from 'react'
import Input from '../../layout/UI/Input/Input'
import styled from 'styled-components'
import { Link, Form } from 'react-router-dom'

const SpecialInput = styled(Input)`
    width: 100%;
    height: 40px;
    border: 1px solid #c3c3c3;
    border-left: 5px solid #06bf6261;

    &[type='submit'] {
    }
    &:focus {
        border-left: 10px solid #06bf62;
    }
`
const LoginForm = () => {
    const handleChange = (e) => {
        const { name, value, type } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? e.target.checked : value,
        }))
    }
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        isRememberChecked: false,
    })
    return (
        <Form method="POST">
            <div className="left-login-form">
                <div className="login-form-field">
                    <div>
                        <label htmlFor="username">Username:</label>
                    </div>
                    <div>
                        <SpecialInput
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            placeholder="Enter a username"
                            name="username"
                            id="username"
                            type="text"
                            minLength="3"
                            maxLength="12"
                            value={formData.username}
                        />
                    </div>
                </div>
                <div className="login-form-field">
                    <div>
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div>
                        <SpecialInput
                            placeholder="Enter a password"
                            onChange={(e) => handleChange(e)}
                            name="password"
                            type="password"
                            minLength="3"
                            id="password"
                            maxLength="12"
                            value={formData.password}
                        />
                    </div>
                </div>
                <div className="login-form-submit">
                    <div className="login-form-submit-preferences">
                        <label htmlFor="isRememberChecked">
                            <Input
                                onChange={(e) => handleChange(e)}
                                name="isRememberChecked"
                                id="isRememberChecked"
                                type="checkbox"
                                checked={formData.isRememberChecked}
                            />
                            Remember Me
                        </label>
                        <span>
                            <Link to="/">Forgot Password?</Link>
                        </span>
                    </div>
                    <div>
                        <SpecialInput
                            name="submitBtn"
                            type="submit"
                            value="Login"
                            disabled={!formData.username || !formData.password}
                        />
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default LoginForm
