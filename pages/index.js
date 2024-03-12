import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../context";
import axios from "axios";
export default function Auth() {
  const {secret,username, setUsername, setSecret } = useContext(Context);
  const router = useRouter();
  
  const appkey = process.env.REACT_APP_APIKEY;
  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios.put(
      'https://api.chatengine.io/users/',
        { username, secret },
        {headers:{"Private-key":{appkey}}}
    )
    .then(
      r=>router.push('/chats'))
      }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) =>onSubmit(e)}>
          <div className="auth-title">NextJs Form</div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="text-input"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => {
                setSecret(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
