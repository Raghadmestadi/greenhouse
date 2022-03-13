import React, { Component } from "react"
class SingUp extends Component {
  state = {
    email: "",
    Password: "",
  }
  handleChangeEmail = e => {
    const value = e.target.value
    this.setState({ email: value })
  }
  handleChangePassword = e => {
    const value = e.target.value
    this.setState({ password: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render() {
    return (
      <div className="SingUp-page">
        <div className="signUp-p">
          <div className="SignUp">
            <h1>SIGN UP </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="t-field">
                <label>Email </label>
                <input onChange={this.handleChangeEmail} type="Email" placeholder="Email" required />
              </div>
              <div className="t-field">
                <label>Password </label>
                <input onChange={this.handleChangePassword} type="password" placeholder="password" required />
              </div>
              <input type="submit" value="Sign Up" className="Signup-b" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SingUp
