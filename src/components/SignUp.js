import "./SignUp.css"
import {Link} from 'react-router-dom'
function Signup() {
    const submitHandler=(e)=>{
        e.preventDefault();
            
            if (e.target.password.value !== e.target.confirm_password.value) {
                alert("Passwords did not match");
                e.target.email.value = "";
                e.target.password.value = "";
                e.target.confirm_password.value = "";
               }
               else
               {
                
                    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCw8RYz_IqbeN2564N9uKCLFquKlTvvU5M", {
                      method: "POST",
                      body: JSON.stringify({
                        email: e.target.email.value,
                        password: e.target.password.value,
                        returnSecureToken:true,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                    .then(result=> {
                        e.target.email.value = "";
                        e.target.password.value = "";
                        e.target.confirm_password.value = "";
                        if(result.ok) {
                        console.log(result)
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    

               }
    }
    return (
        <div className="signup-header">
        <div>
          <h3 className="header">Sign Up</h3>
        </div>
      <div>
        <form className="form" onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            name="confirm_password"
            required
          />
          <div className="button">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        </div>
        <div className="login-footer">
        <span>Have an account?</span>
        <Link to='/login' className="link">Login</Link>
      </div>
      </div>
    );
  }
  
  export default Signup;