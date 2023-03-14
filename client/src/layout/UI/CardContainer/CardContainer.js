import React from 'react'
import classes from './CardContainer.module.css'
const CardContainer = (props) => {
    return (
        <section className={classes['card-container']}>
            {props.children}
        </section>
    )
}

export default CardContainer
