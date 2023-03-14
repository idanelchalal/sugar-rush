import React from 'react'
import classes from './SinglePost.module.css'
import styled from 'styled-components'

const PostImage = styled.div.attrs(({ thumbnail }) => ({
    thumbnail: thumbnail,
}))`
     {
        background: url(${(props) => props.thumbnail});
        background-size: cover;
        height: 350px;
    }

    @media screen and (max-width: 768px) and (min-width: 481px) {
        background-size: contain !important;
    }
`

const SinglePost = ({ thumbnail, content, title, author, comments, date }) => {
    const shortDate = date ? date.substring(0, 10) : ''
    return (
        <>
            <section className={classes['post-container']}>
                <h1 className={classes['post-header-title']}>{title}</h1>
                <PostImage thumbnail={thumbnail} />
                <ul className={classes['details']}>
                    <li>
                        <span className={classes['post-author']}>
                            Written by: {author}
                        </span>
                    </li>
                    <li>
                        <span className={classes['post-date']}>
                            {shortDate}
                        </span>
                    </li>
                </ul>
                <div className={classes['post-body']}>
                    <p className={classes['post-content']}>{content}</p>
                </div>
                <div className={classes['comments']}></div>
            </section>
        </>
    )
}
export default SinglePost
