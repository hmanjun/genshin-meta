import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {useMutation} from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'
import ReCAPTCHA from "react-google-recaptcha"

import Auth from '../../utils/auth'

const Signup = () => {
    const [formState, setFormState] = useState({username: '', email: '', password: ''})
    const [addUser, {error, data}] = useMutation(ADD_USER)
    const [captchaState, setCaptchaState]  = useState(false)

    const triggerCaptcha = () => {
        setCaptchaState(true)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try {
            const {data} = await addUser({
                variables: {...formState}
            })

            Auth.login(data.addProfile.token)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <main>
            <div className="title">
                <h1>Register</h1>
            </div>
            <div className="content">
                <h2 className='content-title'>Enter Info</h2>
                {data ? (
                    <Link to='/'>back to the homepage</Link>
                ):(
                    <form onSubmit={handleFormSubmit}>
                        <span>Username *</span>
                        <input
                            className="form-input"
                            name="username"
                            type="username"
                            value={formState.username}
                            onChange={handleChange}
                        />
                        <span>E-mail *</span>
                        <input
                            className="form-input"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <span>Password *</span>
                        <input
                            className='form-input'
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange} 
                        />
                        <ReCAPTCHA
                            sitekey='6LeCR9khAAAAAPOri3EukIN2MHlelctztDawhRrb'
                            onChange={triggerCaptcha} 
                        />
                        <div className='form-btns-holder'>
                            <button
                                disabled={!captchaState} 
                                className='form-submit'
                                type='submit'
                            >
                                Register
                            </button>
                            <div>
                                <Link to="/login">
                                    <button className='alt-form'>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                    </form>
                )}

                {error && (
                    <h4 style={{color: "red"}}>
                        {error.message}
                    </h4>
                )}
            </div>
        </main>
    )
}

export default Signup