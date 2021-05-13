import React from "react";
import { useState } from "react";
const fetch = require('node-fetch');
export default function Login() {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const API_KEY = "b8705caf20f4a3570c0b40659466304d";
async function getMembers() {
  const res = await fetch("https://api.memberstack.com/v1/members", {
  mode: 'no-cors',   
  headers: { "X-API-KEY": API_KEY }
  }).catch(e => {console.log(e)});
 
  const data = await res.json();
  console.log(data);
}
function handleSubmit (e) {
  e.preventDefault();
  console.log(email, password);
  getMembers();
  
}

  return (
    <div>
      <h1>Register</h1>
      <form data-ms-form="signup" onSubmit={handleSubmit}>
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