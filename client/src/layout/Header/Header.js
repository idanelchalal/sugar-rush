import React, { useEffect } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const handleLogout = (e) => {
        e.preventDefault()
        console.log('AFTER PREVENT****')
        fetch(process.env.REACT_APP_API + '/auth/logout', {
            method: 'POST',
            credentials: 'include',
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {}, [])

    return (
        <div className="header">
            <div className="header-logo">SUGAR RUSH</div>
            <div className="header-nav">
                <div className="header-nav-option">
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? '#f4cbc6' : 'black',
                            }
                        }}
                        end
                        to="/"
                    >
                        Home
                    </NavLink>
                </div>
                <div className="header-nav-option">
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? '#f4cbc6' : 'black',
                            }
                        }}
                        end
                        to="/About"
                    >
                        About
                    </NavLink>
                </div>
                <div className="header-nav-option">
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? '#f4cbc6' : 'black',
                            }
                        }}
                        end
                        to="/Reviews"
                    >
                        Reviews
                    </NavLink>
                </div>
                <div className="header-nav-option">
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? '#f4cbc6' : 'black',
                            }
                        }}
                        end
                        to="/Videos"
                    >
                        Videos
                    </NavLink>
                </div>
                <div className="header-nav-option">
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? '#f4cbc6' : 'black',
                            }
                        }}
                        end
                        to="/Auth"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
