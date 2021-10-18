import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'


const HeaderBottom = (props) => {
    return (
        <div>
            <NavLink exact={true} to={props.homePath}>Home</NavLink>
        </div>
    )
}

export default HeaderBottom
