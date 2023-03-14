import React, { useContext } from 'react'
import { Context, initialContext } from './context/store'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { action as getAuthenticated } from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PostPage from './pages/PostPage/PostPage'
import Layout from './structures/Layout'
import useAuth from './hooks/useAuth'

function App() {
    const Auth = useAuth(localStorage.getItem('token'))
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    element: <HomePage />,
                    index: true,
                },
                {
                    path: 'Post',
                    children: [{ path: ':id', element: <PostPage /> }],
                },
            ],
        },
        {
            path: 'Auth',
            children: [
                {
                    action: getAuthenticated,
                    index: true,
                    element: <LoginPage />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default App
