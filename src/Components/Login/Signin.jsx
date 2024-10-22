import React, { useState } from 'react';
import signincss from './Signin.module.css';
import logincss from '../Signup/login.module.css';
import { Link, useNavigate } from 'react-router-dom';


function Signin() {
    const navigate = useNavigate();
    const [inputData,setInputData] = useState({
        userName:"",
        password:""
    });
    const [errors,setErrors] = useState({});

    const handleOnData = (e)=>{
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
    }

    const handleOnError = ()=>{
        let error={};
        const data = JSON.parse(localStorage.getItem('inputData'));
        console.log(data.firstName+' '+data.secondName)
        if(inputData.userName==''){
            error.username="UserName is required";
        }
        else if(inputData.userName!==data.firstName+' '+data.secondName){
            error.username="UserName is incorrect";
        }
        if(inputData.password==''){
            error.password="Password is required";
        }
        else if(inputData.password!=data.Password){
            error.password="Password is Incorrrect";
        }
        setErrors(error);
        if(Object.keys(error).length==0){
            navigate('/');
            sessionStorage.setItem('loginData',JSON.stringify(inputData)
        );
        }
    }

    return (
        <div className={logincss.container}>
            <div className={logincss.loginContainer}>
                <div className={logincss.loginHeading}>
                    <h1>Tomato.</h1>
                </div>
                <div className={signincss.inputData}>
                    <label htmlFor="uaserName"></label>
                    <input type="text" name='userName' placeholder='Enter your userName...' onChange={handleOnData}  />
                    <span>{errors.username}</span>
                    <label htmlFor="password"></label>
                    <input type="text" name='password' placeholder='Enter your password...' onChange={handleOnData} />
                    <span>{errors.password}</span>
                    <button onClick={handleOnError} >Sign in</button>
                </div>
                <div className={signincss.signupSection}>
                    <h3>Not A Account <Link className={signincss.linkStyle} to="/signup">Sign up</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Signin
