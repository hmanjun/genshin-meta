import React, {useState} from 'react'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_COMMENT } from '../../utils/mutations'

import './style.css'

const CommentForm = ({target, id}) => {
    const [commentState, setCommentState] = useState("")
    const [errorState, setErrorState] = useState("")
    const [post, {error, data}] = useMutation(ADD_COMMENT)

    const handleChange = (event) => {
        const {value} = event.target
        setCommentState(value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        try {
            if(!Auth.loggedIn()) {
                setErrorState("Login to post comment!")
            } else {
                const input = {
                    name: Auth.getUser().data.username,
                    body: commentState,
                    target: target,
                    id: id
                }
                console.log({...input})
                await post({
                    variables: {...input}
                })
            }
        } catch (err) {
            console.error(err)
        }
        setCommentState("")
    }

    return (
        <div className='char-form-holder'>
            {!Auth.loggedIn() && (
                <Link to="/login">
                    <h3 style={{color: "red"}}>Sign in before creating comment</h3>
                </Link>
            )}
            <form onSubmit={handleFormSubmit}>
                <span>Comment *</span>
                <input
                    className='comment-input'
                    name="comment"
                    type="comment"
                    value={commentState}
                    onChange={handleChange}
                />
                <button className='comment-submit' type='submit'>
                    Post Comment
                </button>
            </form>
            {errorState && (
                <h4 style={{color: "red"}}>Need to sign in before posting comment</h4>
            )}
        </div>
    )
}

export default CommentForm
