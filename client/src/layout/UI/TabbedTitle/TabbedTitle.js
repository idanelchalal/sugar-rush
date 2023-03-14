import React from 'react'
import classes from './TabbedTitle.module.css'
const TabbedTitle = ({ title }) => {
    return (
        <label className={classes['tabbed-title']}>
            <hr />
            {title ? title : 'UNKOWN TITLE'}
        </label>
    )
}

export default TabbedTitle
