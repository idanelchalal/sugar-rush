import { useState } from 'react'
import classes from './Button.module.css'
const Button = ({
    value,
    width,
    handleOnClick,
    enableNavigationValue,
    navigationValue,
}) => {
    const [btnValue, setBtnValue] = useState(value)
    const getValue = (e) => {
        handleOnClick()
        if (enableNavigationValue) {
            setBtnValue(navigationValue)
        }
    }

    return (
        <button
            onClick={(e) => getValue(e)}
            style={{
                width: width,
            }}
            className={classes['outlined-button']}
        >
            {btnValue}
        </button>
    )
}

export default Button
