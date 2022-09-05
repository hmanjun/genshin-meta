import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_COMMENTS } from '../../utils/queries'

import './style.css'

import Auth from '../../utils/auth'

const CommentBar = () => {

    const {loading, data} = useQuery(QUERY_COMMENTS)
    const comments = data?.allComments || []

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
            <div id="side-comm-splitter"></div>
            <div id="top-comments-container">
                {loading ? (
                    <h1>Loading recent comments...</h1>
                ):(
                    comments.map((comment) => (
                        <div className='comment-card'>
                            <div>
                                <span>{`${comment.name} at `}</span>
                                <span className='side-comm-target'>{comment.target}</span>
                            </div>
                            <p className='side-comment-body'>
                                {comment.body}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </aside>
    )
}

export default CommentBar