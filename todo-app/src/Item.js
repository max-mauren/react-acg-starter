import React from 'react'

const Item = (props) => {
        return (
            <li>
                <label>
                    <input onClick={ props.clickHandler} type="checkbox" checked={props.done || false} />
                    <span>{props.text}</span>
                </label>
            </li>
        )
}

export default Item;