import * as yup from 'yup'

const formSchema = yup.object().shape({

  username: yup.string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  email: yup.string()
    .trim()
    .required('A valid email is required')
    .email('A valid email is required'),
  tosAgree: yup.boolean()
    .required()
    .isTrue()
})

export default formSchema
