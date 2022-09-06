import React from 'react'
import './style.css'

const CommentContainer = ({comments}) => {
    return (
        <div>
            {comments.map((data) => (
                <div className='commentt-card'>
                    <div className='align-center'>
                        <img className='comment-icon' alt="user icon" src={require(`../../images/generic/user-avatar.webp`)}/>
                        <h4 className='c-name'>{data.name}</h4>
                    </div>
                    <p style={{color: "white"}}>{data.body}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentContainer