import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('')

    if(userInfo.username === '' || userInfo.password === '') {
        setError('Username and Password are Required.')
    }

    const handleChange = (e) => {
        setUserInfo({
          ...userInfo,
          [e.target.name]: e.target.value
        })
      }


    return (
        <div>
            <h1>You've Come to the Right Place to Find an Article</h1>
            <div class="login-form">
                <h2>Login Below!</h2>
                <form onSubmit>
                 <input
                    name='Username'
                    placeholder='Username'
                    type='text'
                    onChange={handleChange}
                    value={userInfo.username}
                    />
                    <br/>
                    <br/>
                  <input
                    name='Password'
                    placeholder='Password'
                    type='Password'
                    onChange={handleChange}
                    value={userInfo.password}
                  />  
                    <button>Login for the Best Articles!</button>
                </form>
            </div>
        </div>
    )
}