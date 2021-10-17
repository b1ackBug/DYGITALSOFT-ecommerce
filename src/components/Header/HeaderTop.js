import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderTop = (props) => {
    return (
        <>
            <div className="head1">
                <ul>
                    <NavLink className="head1link" to={props.aboutPath}>About</NavLink>
                    <NavLink className="head1link" to={props.contactPath}>Contacts</NavLink>
                    <NavLink className="head1link" to={props.storeLocPath}>Store Location</NavLink>
                    <NavLink className="head1link" to={props.trackOrderPath}>Track Order</NavLink>
                    <NavLink className="head1link" to={props.blogPath}>Blog</NavLink>
                </ul>
            </div>
        </>
    )
}

export default HeaderTop
