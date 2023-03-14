import React from 'react'
import classes from './Rate.module.css'
const Rate = ({ objectValue, objectValueDescriber, img }) => {
    return (
        <>
            <div className={classes['rate-bar-object']}>
                <div className={classes['object-icon']}>
                    <img width="38" src={img} alt="RATE ICON" />
                </div>
                <div className={classes['object-value']}>{objectValue}</div>
                <div className={classes['object-value-describer']}>
                    {objectValueDescriber}
                </div>
            </div>
        </>
    )
}

export default Rate
