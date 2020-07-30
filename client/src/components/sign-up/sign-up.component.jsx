import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { emailSignUpStart } from '../../redux/user/user.actions'
import './sign-up.styles.scss'

const SignUp = ({ emailSignUpStart }) => {

  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    emailSignUpStart(email, password, displayName);
    /*     try {

          const { user } = await auth.createUserWithEmailAndPassword(email, password);
          await createUserProfileDocument(user, { displayName });

          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (err) {
          console.error(err);
        } */
  }

  const handleChange = (event) => {
    setCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          label="Display Name"
          handleChange={handleChange}
          required />
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required />
        <div className='buttons'>
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  emailSignUpStart: (email, password, displayName) => dispatch(emailSignUpStart({ email, password, displayName }))
})

export default connect(null, mapDispatchToProps)(SignUp);
