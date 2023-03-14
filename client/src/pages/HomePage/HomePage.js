import { useMemo } from 'react'
import './HomePage.css'
import About from '../../components/About/About'
import Rates from '../../components/Rates/Rates'
import useFetch from '../../hooks/useFetch'
import LatestPosts from '../../components/LatestPosts/LatestPosts'
import LoadingSpinner from '../../layout/UI/LoadingSpinner/LoadingSpinner'

const HomePage = () => {
    const { data, error, loading } = useFetch(
        process.env.REACT_APP_API + '/post'
    )
    const dynamicContent = useMemo(
        () => <LatestPosts pulledPosts={data} />,
        [data]
    )

    const staticContent = useMemo(
        () => (
            <>
                <About />
                <Rates />
            </>
        ),
        []
    )
    return (
        <>
            {staticContent}
            {loading && !error && <LoadingSpinner />}
            {!loading && error && <h1>Couldn't load posts.</h1>}
            {!loading && !error && dynamicContent}
        </>
    )
}

export default HomePage
