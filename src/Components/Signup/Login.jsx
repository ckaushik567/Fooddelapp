import React, { useState } from 'react';
import logincss from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        firstName: "",
        secondName: "",
        Email: "",
        Mobile: "",
        Password:""
    });

    const [errors, setErrors] = useState({});

    const handleOnData = (e) => {
        setSignupData(
            {
                ...signupData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleOnError = (e) => {
        let error = {};
        if(signupData.firstName==''){
            error.firstName="firstName is required";
        }
        if(signupData.secondName==''){
            error.secondName="secondName is required";
        }
        if(signupData.Email==''){
            error.email = "Email is required";
        }
        else if(!signupData.Email.includes('@')){
            error.email="Email is incorrect";
        }
        if(signupData.Mobile==''){
            error.mobile = "Mobile is required";
        }
        else if(signupData.Mobile.length!=10){
            error.mobile="invalid Mobile Number"
        }
        if(signupData.Password==''){
            error.password="password is required"
        }
        setErrors(error);

        if(Object.keys(error).length==0){
            navigate('/');
            localStorage.setItem('inputData', JSON.stringify(signupData));
        }
    }

    return (
        <div className={logincss.container}>
            <div className={logincss.loginContainer}>
                <div className={logincss.loginHeading}>
                    <h1>Tomato.</h1>
                </div>
                <div className={logincss.inputData}>
                    <label htmlFor="firstName"></label>
                    <input type="text" name='firstName' placeholder='Enter your firstName...' onChange={handleOnData} />
                    <span>{errors.firstName}</span>
                    <label htmlFor="secondName"></label>
                    <input type="text" name='secondName' placeholder='Enter your secondName...' onChange={handleOnData} />
                    <span>{errors.secondName}</span>
                    <label htmlFor="EmailName"></label>
                    <input type="text" name='Email' placeholder='Enter your Email...' onChange={handleOnData} />
                    <span>{errors.email}</span>
                    <label htmlFor="MobileNumber"></label>
                    <input type="text" name='Mobile' placeholder='Enter your mobile...' onChange={handleOnData} />
                    <span>{errors.mobile}</span>
                    <label htmlFor="password"></label>
                    <input type="text" name='Password' placeholder='Enter your password...' onChange={handleOnData} />
                    <span>{errors.password}</span>
                    <button onClick={handleOnError}>Sign up</button>
                </div>
                <div className={logincss.signupSection}>
                    <h3>Already have a account <Link className={logincss.linkStyle} to="/login">Sign in</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Login
