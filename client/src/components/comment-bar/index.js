import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import './style.css'

import Auth from '../../utils/auth'

const CommentBar = () => {
    const logout = (event) => {
        event.preventDefault()
        Auth.logout()
    }

    return (
        <aside>
            {Auth.loggedIn() ? (
                <div className="log-btn" onClick={logout}>
                    <div className='log-wrapper'>
                        <img className='log-btn-icon' alt="user icon" src={require(`../../images/generic/user-avatar.webp`)}/>
                        <span className="log-span">Guest (Logout)</span>
                    </div>
                </div>
            ):(
                <Link to="/login">
                    <div className="log-btn">
                        <div className='log-wrapper'>
                            <img className='log-btn-icon' alt="user icon" src={require(`../../images/generic/user-avatar.webp`)}/>
                            <span className="log-span">Guest (Login)</span>
                        </div>
                    </div>
                </Link>
            )}
        </aside>
    )
}

export default CommentBar