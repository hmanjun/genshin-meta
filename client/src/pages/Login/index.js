import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER} from '../../utils/mutations'

import Auth from '../../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({email: '', password: ''})
    const [login, {error, data}] = useMutation(LOGIN_USER)

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
            const {data} = await login({
                variables: {...formState}
            })
            Auth.login(data.login.token)
        } catch (err) {
            console.error(err)
        }

        setFormState({
            email: '',
            password: ''
        })
    }

    return (
        <main>
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="content">
                <h2 className='content-title'>Enter Info</h2>
                {data ? (
                    <pa>
                        Success! You may now head{' '}
                        <Link to='/'>back to the homepage</Link>
                    </pa>
                ):(
                    <form onSubmit={handleFormSubmit}>
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
                        <button 
                            className='form-submit'
                            type='submit'
                        >
                            Submit
                        </button>
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

export default Login