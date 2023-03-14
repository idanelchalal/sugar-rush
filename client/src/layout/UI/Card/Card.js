import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import classes from './Card.module.css'

const Card = ({ thumbnail, children, title, id }) => {
    const navigate = useNavigate()

    return (
        <div className={classes['card']}>
            <div className={classes['card-thumbnail']}>
                <img src={thumbnail} alt="CARD THUMBNAIL" />
            </div>
            <h1 className={classes['card-title']}>{title}</h1>
            <p className={classes['card-content']}>{children}</p>
            <Button
                enableNavigationValue={true}
                navigationValue="Entering..."
                value="Read More..."
                handleOnClick={(e) => {
                    navigate(`/post/${id}`)
                }}
            />
        </div>
    )
}

export default Card
