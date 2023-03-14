import { useState, useEffect } from 'react'
import LoadingSpinner from '../../layout/UI/LoadingSpinner/LoadingSpinner'
import { useNavigate, useParams, Link } from 'react-router-dom'
import SinglePost from '../../components/SinglePost/SinglePost'
import PostComments from '../../components/PostComments/PostComments'

const PostPage = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [isError, setIsError] = useState({ status: false, message: '' })
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        let intervalId
        const loadPost = async () => {
            const res = await fetch(process.env.REACT_APP_API + `/Post/${id}`, {
                method: 'GET',
            })
            if (!res.ok) {
                setIsLoading(false)
                setIsError({
                    status: true,
                    message: 'Server Error.',
                })
                intervalId = setInterval(() => navigate('/'), 5000)
            }

            const data = await res.json()

            if (!data.ok) {
                setIsLoading(false)
                setIsError({ status: true, message: "Post wasn't found." })
                intervalId = setInterval(() => navigate('/'), 5000)
            }
            setPost(data.data)
            setIsLoading(false)
        }
        loadPost()
        setIsLoading(false)
        return () => {
            clearInterval(intervalId)
        }
    }, [id, navigate])
    return (
        <>
            {!isError.status && isLoading && <LoadingSpinner />}
            {!isLoading && post && !isError.status && (
                <>
                    <SinglePost
                        author={post.author}
                        date={post.date}
                        comments={post.comments}
                        title={post.title}
                        content={post.content}
                        key={post._id}
                        thumbnail={post.thumbnail}
                        id={post._id}
                    />
                    <PostComments />
                </>
            )}
            {!isLoading && isError.status && (
                <>
                    <h1 className="error-text">{isError.message}</h1>
                    <h4 className="error-text">Redirecting to home page.</h4>
                    <h5>
                        If you're not being redirect in 5 seconds{' '}
                        <Link to="/">click here</Link>
                    </h5>
                </>
            )}
        </>
    )
}

export default PostPage
