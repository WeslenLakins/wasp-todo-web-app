import { Link } from 'react-router-dom'
import { LoginForm } from '@wasp/auth/forms/Login'

const LoginPage = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <LoginForm />
      <br />
      <span>
        Need to create an account? (<Link to='/signup'>Signup</Link>)
      </span>
    </div>
  )
}

export default LoginPage
