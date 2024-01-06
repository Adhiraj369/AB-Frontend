import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
// import '../../css/Login.css';
import { useNavigate } from 'react-router-dom';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

// import LogoComponent from '../../assets/LogoComponent.js';

const LoginSignUp = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  //New Consts

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [isLogin, setisLogin] = useState(false);

  // const navigateTo = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("usrName", "demoUser");
    // navigateTo('/');
  }

  useEffect(() => {
    if (localStorage.getItem("usrName")) {
      // navigateTo("/");
    }

  }, [])

  const handleNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='LoginSignUp Login'>
            <div className='loginContainer'>
              <div className='bgImageLogin'>
                <div className='logoLogin'>
                  {/* <LogoComponent /> */}
                </div>
              </div>

              <div className='LoginSignUpForm'>
                <div className='SignupFormArea'>
                  <h1 className='signUpHeading'>Login</h1>
                  <form className='SignupForm' onSubmit={loginSubmit}>

                    <div className='loginInputs'>
                      <label htmlFor='emailForm' className='loginLabel'>
                        Email
                      </label>
                      <input
                        className='loginInput'
                        name='emailForm'
                        placeholder='bt22cse@iiitn.ac.in'
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>

                    <div className='loginInputs'>
                      <label htmlFor='passwordForm' className='loginLabel'>
                        Password
                      </label>
                      <div className='passwordInputDiv'>
                        <input
                          className='passwordInput'
                          name='passwordForm'
                          type={`${showPassword ? 'text' : 'password'}`}
                          placeholder='Enter Your Password'
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />

                        {/* {(showPassword ?
                          <VisibilityOffOutlinedIcon
                            className='EyeIcon'
                            onClick={() => { setShowPassword(false) }}
                          />
                          :
                          <VisibilityOutlinedIcon
                            className='EyeIcon'
                            onClick={() => { setShowPassword(true) }}
                          />
                        )} */}
                      </div>
                    </div>

                    <button className='submitButton' type='submit' >
                      Login
                    </button>
                  </form>
                  <div className='SignUpToLogin'>
                    {/* <span>
                      First Time Here?
                    </span> */}
                    <span className='linkToLogin'>
                      <Link to="/register" className="btn">First Time Here?</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>









          {/* <main>
            <section className="login">
              <div className="login__box">
                <div className="prickly__logo">
                  <img src="../pimages/image1.jpg" />
                </div>
                <form id="loginForm" onSubmit={loginSubmit}>
                  <div className="login__input">
                    <div>
                      <i className="fa-solid fa-user" />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                      <span className="error" id="usernameError" />
                    </div>
                    <div>
                      <i className="fa-solid fa-lock" />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <span className="error" id="passwordError" />
                    </div>
                  </div>
                  <div className="login__checkbox">
                    <Link to="/password/forgot" className="forget-password">Forget Password ?</Link>
                    <input type="submit" value="Login" className="loginBtn btn login__btn" />
                  </div>
                </form>
              </div>
              <div className="border__top login__border" />
              <div className="border__top" />
              <div className="login__box--btn">
                <Link to="/register" className="btn">sign up</Link>
              </div>
            </section>
          </main> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
