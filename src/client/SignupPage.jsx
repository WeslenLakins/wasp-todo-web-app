import { Link } from 'react-router-dom'
import { SignupForm } from '@wasp/auth/forms/Signup'

const SignupPage = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <SignupForm />
      <br />
      <span>
        Already have an account? (<Link to='/login'>Login</Link>)
      </span>
    </div>
  )
}

export default SignupPage
