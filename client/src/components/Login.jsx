import React from "react";
import { useState } from "react"
export default function Login() {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
 
const handleSubmit = e => {
  e.preventDefault();
     const loginInfo = {
      email,
      password
    }
}

  return (
    <div>
      <h1>Login</h1>
      <form data-ms-form="login" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          data-ms-member="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          data-ms-member="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}