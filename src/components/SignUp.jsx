import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/signUp.css"
import axios from "axios"
const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupSuccess, setSignupSuccess] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/admin/signup", {
        username,
        password
      })
      console.log("Signup successful:", response.data)
      setSignupSuccess(true)
      alert("Signup successful")
    } catch (error) {
      alert("Signup failed")
    }
  }

  return (
    <div className="signup-page">
      {!signupSuccess ? (
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
      ) : (
        <div className="signup">
          <p>Signup successful!</p>
          <Link to="/login">Click here to login</Link>
        </div>
      )}
    </div>
  )
}

export default Signup
