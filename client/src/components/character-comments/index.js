import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REPORT_COMMENT } from '../../utils/mutations'
import { DELETE_COMMENT } from '../../utils/mutations'
import './style.css'

const CommentContainer = ({comments}) => {
    const [report, {errorR, dataRep}] = useMutation(REPORT_COMMENT)
    const [deleteCom, {errorD, dataDel}] = useMutation(DELETE_COMMENT)

    const [reloadState, setReloadState] = useState(0)

    async function reportComment(id) {
        try {
            await report({
                variables: {reportCommentId: id}
            })
            setReloadState(reloadState+1)
        } catch (err) {
            console.error(err)
        }
    }

    async function deleteComment(id) {
        try {
            await deleteCom({
                variables: {deleteCommentId: id}
            })
            window.location.reload(false)
        } catch (err) {
            console.error(err)
        }
    }
    console.log(comments)
    return (
        <div>
            {comments.map((data) => (
                <div className='commentt-card'>
                    <div className='align-center'>
                        <img className='comment-icon' alt="user icon" src={require(`../../images/generic/user-avatar.webp`)}/>
                        <h4 className='c-name'>{data.name}</h4>
                    </div>
                    <p style={{color: "white"}}>{data.body}</p>
                    <button type='button' onClick={(e) => reportComment(data._id)}>Report Comment</button>
                    {data.reports > 1 && (
                        <button type="button" onClick={(e) => deleteComment(data._id)}>Delete Comment</button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CommentContainer