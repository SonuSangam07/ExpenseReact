import React, { Fragment } from "react";

import {Link} from 'react-router-dom'



import './login.css'

const Login = () => {

  const LoginHandler = e => {
    e.preventDefault()
    console.log(e.target.email.value,e.target.password.value)
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw8RYz_IqbeN2564N9uKCLFquKlTvvU5M", {
        method: "POST",
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
          returnSecureToken:true,
          
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((result)=>{
        if(result.ok){
return result.json();
        }
        else{
            return result.json().then((data)=>{
                let err="Authentication failed";
                alert(err)
            }

            )
        }
      }).then((res=>{
        console.log(res);
      }))
      .catch(err=>{
        alert(err)
      })
  }
  return (
    <Fragment>
        <div className="login-header">
        <div>
        <h3 className="header">Login Here</h3>
      </div>
      <div>
        <form className="form" onSubmit={LoginHandler}>
          <input type="email" placeholder="Email" className="input" name='email'/>
          <input type="password" placeholder="Password" className="input" name='password'/>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
        </div>
        <div className="signup-footer">
        <span>Don't Have an account?</span>
        <Link to='/signup' className="link">Signup</Link>
      </div>
     </Fragment>
  );
};

export default Login