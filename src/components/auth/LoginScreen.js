import {Link} from "react-router-dom";

export const LoginScreen = () => {
  return (
      <>
          <h3 className="auth__title">Login</h3>

          <form>
              <input type="text"
                     className="auth__input"
                     placeholder="email"
                     name="Email"
                     autoComplete="off"/>

              <input type="password"
                     className="auth__input"
                     placeholder="Password"
                     name="password"/>

              <button className="btn btn-primary btn-block"
                      type="submit">
                  Login
              </button>

              <div className="auth__social-network">
                  <p>Login with social network</p>

                  <div className="google-btn">
                      <div className="google-icon-wrapper">
                          <img className="google-icon"
                               src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                               alt="Google"/>
                      </div>
                      <p className="btn-text">
                          <b>Sign in with Google</b>
                      </p>
                  </div>
              </div>

              <Link to="/auth/register"
                    className="link">
                  Create new account
              </Link>

          </form>
      </>
  )
}