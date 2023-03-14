import React from 'react'
import CardContainer from '../../layout/UI/CardContainer/CardContainer'
import Card from '../../layout/UI/Card/Card'
import './LatestPosts.css'
import Button from '../../layout/UI/Button/Button'
import TabbedTitle from '../../layout/UI/TabbedTitle/TabbedTitle'

const LatestPosts = ({ pulledPosts }) => {
    const { data } = pulledPosts ? pulledPosts : { data: {} }
    const posts =
        data &&
        Object.values(data).map((object) => (
            <Card
                key={object._id}
                title={object.title}
                thumbnail={object.thumbnail}
                id={object._id}
            >
                {object.content}
            </Card>
        ))
    return (
        <div className="latest-posts-container">
            <TabbedTitle title={'Latest Posts'} />
            <CardContainer>{posts}</CardContainer>
            <Button value="All Posts" />
        </div>
    )
}

export default LatestPosts
