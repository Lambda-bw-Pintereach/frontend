import * as yup from 'yup'

const formSchema = yup.object().shape({

  username: yup.string()
    .trim()
    .required('Username is required')
    .min(3, 'First Name  must be at least 3 characters long'),
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  email: yup.string()
    .trim()
    .required('Email is required sort of')
    .email('A valid email is required sort of'),
  tosAgree: yup.boolean()
    .required()
    .isTrue()

})

export default formSchema
