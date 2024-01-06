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


// import React, { useEffect, useState } from 'react';
// import '../../css/Login.css';
// import logo from "../../assets/EventPageAsst/logoPlaceHolder.svg";
// import { useNavigate } from 'react-router-dom';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import Footer from '../Footer';
// import LogoComponent from '../../assets/LogoComponent.js';

const SignUp = ({ history, location }) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    // const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState("/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    // const loginSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(login(loginEmail, loginPassword));
    // };

    const registerSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        // myForm.set("avatar", avatar);
        dispatch(register(myForm));
    };

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
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

    // const navigateTo = useNavigate();

    useEffect(() => {
        const footerHeight = document.querySelector('.footer').offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
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

                    <div className='LoginSignUp SignUp'>
                        <div className='loginContainer'>
                            <div className='bgImageLogin'>
                                <div className='logoLogin'>
                                    {/* <LogoComponent /> */}
                                </div>
                            </div>

                            <div className='LoginSignUpForm'>
                                <div className='SignupFormArea'>
                                    <h1 className='signUpHeading'>Create an account</h1>
                                    <form className='SignupForm' onSubmit={registerSubmit}>
                                        <div className='loginInputs'>
                                            <label htmlFor='nameForm' className='loginLabel'>
                                                Full Name
                                            </label>
                                            <input
                                                className='loginInput'
                                                name='name'
                                                placeholder='Enter Your Name'
                                                value={name}
                                                onChange={registerDataChange}
                                            />
                                        </div>

                                        <div className='loginInputs'>
                                            <label htmlFor='emailForm' className='loginLabel'>
                                                Email
                                            </label>
                                            <input
                                                className='loginInput'
                                                name='email'
                                                placeholder='bt22cse@iiitn.ac.in'
                                                value={email}
                                                onChange={registerDataChange}
                                            />
                                        </div>

                                        <div className='loginInputs'>
                                            <label htmlFor='passwordForm' className='loginLabel'>
                                                Password
                                            </label>
                                            <div className='passwordInputDiv'>
                                                <input
                                                    className='passwordInput'
                                                    name='password'
                                                    type={`${showPassword ? 'text' : 'password'}`}
                                                    placeholder='Enter Your Password'
                                                    value={password}
                                                    onChange={registerDataChange}
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

                                        {/* <button className='submitButton' type='submit' >
                                            Create account
                                        </button> */}
                                        <input type="submit" value="Create account" className="submitButton" />

                                    </form>
                                    <div className='SignUpToLogin'>
                                        <span>
                                            Already have an account?
                                        </span>
                                        <Link className='linkToLogin' to="/login">
                                            Log In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* <main>
                        <section className="signup">
                            <div className="signup__box">
                                <div className="signup__box--heading">
                                    <h1>join the fam!</h1>
                                    <p>
                                        we don't spam and promise to only send you your cutu order updates
                                        ...unless if you consent for more updates abd rant sessions.
                                    </p>
                                </div>
                                <div className="signup__form">
                                    <form id="signupForm" onSubmit={registerSubmit}>
                                        <div>
                                            <i className="fa-solid fa-user" />
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                required
                                                name="name"
                                                value={name}
                                                onChange={registerDataChange}
                                            />
                                            <span className="error" id="firstNameError" />
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-user" />
                                            <input
                                                type="text"
                                                id="lastName"
                                                required=""
                                                placeholder="last name"
                                            />
                                            <span className="error" id="lastNameError" />
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-envelope" />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                required
                                                name="email"
                                                value={email}
                                                onChange={registerDataChange}
                                            />
                                            <span className="error" id="emailError" />
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-user" />
                                            <input
                                                type="text"
                                                id="username"
                                                placeholder="username"
                                            />
                                            <span className="error" id="usernameError" />
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-lock" />
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                required
                                                name="password"
                                                value={password}
                                                onChange={registerDataChange}
                                            />
                                            
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-lock" />
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="confirm password"
                                            />
                                            <span className="error" id="confirmPasswordError" />
                                        </div>

                                        <input type="submit" value="Register" className="signUpBtn btn signup__btn" />
                                    </form>
                                </div>
                            </div>
                        </section>
                    </main> */}
                </Fragment>
            )}
        </Fragment>
    );
};

export default SignUp;
