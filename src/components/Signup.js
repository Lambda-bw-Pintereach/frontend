import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from '../utils/formSchema';
import axios from 'axios';

import { Landing } from '../App.style';
import LoginContainer from "./Login.style"

const initialFormValues = {
  username: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  password: '',
}

const Signup = () => {
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({ ...formErrors, [e.target.name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] })
      })

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })

  }

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }

    axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        console.log(res)
        push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <LoginContainer>
    <Landing>
      <section className="form_section">
        <h1>Create Account</h1><br />
        <form onSubmit={handleSubmit}>
          <div className="form-group form-label mt-3">
            <label htmlFor="username">Username:</label>
            <input className="form-control" onChange={handleChange} value={formValues.username} name="username" id="username" placeholder="Username" />
          </div>
          <p className='errors'>{formErrors.username}</p>
          <div className="form-group form-label mt-3">
            <label htmlFor="password">Password:</label>
            <input className="form-control" onChange={handleChange} value={formValues.password} name="password" id="password" type="password" placeholder="Password" />
            <p className='errors'>{formErrors.password}</p>
          </div>
          <br />
          <button  className="button-orange" disabled={disabled}>SignUp</button>
        </form><br />
        <p> Already have an account? <Link to="/">Login</Link></p>
      </section>
    </Landing>
    </LoginContainer>
  );
}

export default Signup;



