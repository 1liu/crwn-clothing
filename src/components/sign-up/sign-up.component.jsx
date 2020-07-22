import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
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
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required />
          <div className='buttons'>
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
