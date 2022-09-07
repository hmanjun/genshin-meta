import React from 'react'
import { useMutation } from '@apollo/client'
import { REPORT_COMMENT } from '../../utils/mutations'
import { DELETE_COMMENT } from '../../utils/mutations'
import './style.css'

const CommentContainer = ({comments}) => {
    const [report, {errorR, dataRep}] = useMutation(REPORT_COMMENT)
    const [deleteCom, {errorD, dataDel}] = useMutation(DELETE_COMMENT)

    const reportComment = async(id) => {
        try {
            await report({
                variables: {id: id}
            })
        } catch (err) {
            console.error(err)
        }
    }

    const deleteComment = async(id) => {
        try {
            await deleteCom({
                variables: {id: id}
            })
        } catch (err) {
            console.error(e)
        }
    }

    return (
        <div>
            {comments.map((data) => (
                <div className='commentt-card'>
                    <div className='align-center'>
                        <img className='comment-icon' alt="user icon" src={require(`../../images/generic/user-avatar.webp`)}/>
                        <h4 className='c-name'>{data.name}</h4>
                    </div>
                    <p style={{color: "white"}}>{data.body}</p>
                    <button type='button' onClick={reportComment(data._id)}></button>
                    {data.reports > 1 && (
                        <button type="button" onClick={deleteCom}></button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CommentContainer