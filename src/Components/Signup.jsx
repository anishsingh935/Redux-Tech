import { Button, Checkbox, TextField } from "@material-ui/core";
import Snackbar from '@mui/material/Snackbar';

import RightCardImage from "../images/RightCardImage.svg"
import SignUpLogo from "../images/signupLogo.svg"
import mobileLogo from "../images/mobileLogo.svg"
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./NavBarSyles.css"
import SnackbarFile from "./SnackbarFile"

import { useEffect, useState } from "react";


import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';


AWS.config.update({
    region: 'your-region'
  });


  const cognitoFunction = async (name, email, password) => {
    const poolData = {
      UserPoolId: 'us-east-1_I3DKecNsh',
      ClientId: '3bkhbfcs6u467f4q9ln4mcob40'
    };
    const userPool = new CognitoUserPool(poolData);
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: 'name',
        Value: name,
      })
    ];
  
    const validationData = [];
  
    try {
      const result = await new Promise((resolve, reject) => {
        userPool.signUp(email, password, attributeList, validationData, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
      console.log(result);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  
  

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [open,setOpen]= useState(false);
    const [globalmsg , setGlobalmsg] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    //Validation checking function
    const validationChecking=()=>{
        if (!name) {
            setNameError('Name is required');
            return false;
          } else {
            setNameError('');
          }
      
          // check email field
          if (!email) {
              setEmailError('Email is required');
              return false;
          } else if (!/\S+@\S+\.\S+/.test(email)) {
              setEmailError('Email is invalid');
              return false;
          } else {
            setEmailError('');
          }
      
          // check password field
          if (!password) {
            setPasswordError('Password is required');
            return false;
          } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return false;
          } else {
            setPasswordError('');
          }
          return true;
    }

    //On submit function
    const validationFunc = async(e) => {
        e?.preventDefault();

        if(validationChecking()){
            const data = await cognitoFunction(name,email,password);
            console.log("Cognito Information",data);
            setOpen(true);
            if(!data){
                setGlobalmsg("Data Already exit or something else issue") 
            }
            else{
                setGlobalmsg("Succesfully Data added")
            }
        }
        else{
            setOpen(true);
        }
      };


    return (
        <>
            <div className="mobilelogo">
                <img src={mobileLogo} alt=""/>
                <span className="headingStyle">Asatera</span>
            </div>

            <div className="parentClass">
                <div className="mobilemode">

                    <div className="logostyle">
                        <img src={SignUpLogo} alt=""/>
                        <span className="headingStyle">Asatera</span>
                    </div>

                    <div className="divsection">
                        <span className="headingStyle" onClick={()=>setOpen(true)}>Create an account</span>
                        <span className="subheadingStyle">Sign up to continue </span>
                        <div className="inputBox">
                            <span className="labelHeading">Name</span>
                            <div >
                                    <TextField  value={name} onChange={handleNameChange} id="outlined-basic" label="Name" variant="outlined" />
                                    {nameError && <span className="error">{nameError}</span>}
                            </div>
                        </div>
                        <div className="inputBox">
                            <span className="labelHeading">Email</span>
                            <div >
                                <TextField value={email}onChange={handleEmailChange} id="outlined-basic" label="Email" variant="outlined" />
                                {emailError && <span className="error">{emailError}</span>}
                            </div>
                        </div>
                        <div className="inputBox">
                            <span className="labelHeading">Password</span>
                            <div >
                                <TextField value={password} onChange={handlePasswordChange}  type="password"id="outlined-basic" label="Password" variant="outlined" />
                                {passwordError && <span className="error">{passwordError}</span>}
                            </div>
                        </div>
                        <div className="confirmationCheck">
                            <div className="flexstyle">
                                <span className="labelHeading"><Checkbox/>This is a Business Account</span>
                            </div>
                            <div className="flexstyle">
                                <span className="labelHeading"> <Checkbox />I agree with terms & conditions</span>
                            </div>
                        </div>
                        <div>
                            <button className="buttonClass" onClick={()=> validationFunc()}><span className="buttonClassText">Create an account</span></button>
                        </div>
                        <div className="socialIcons">
                            <TwitterIcon className="iconBorderColor"/>
                            <GoogleIcon  className="iconBorderColor"/>
                            <GitHubIcon  className="iconBorderColor"/>
                            <span className="siginStyle">Or sign in with</span>
                        </div>
                    </div>
                </div>

                <div  className="desktopMode">
                    <img src={RightCardImage} alt=""/>
                </div>
            </div>

            <SnackbarFile open={open} setOpen={setOpen} msg ={globalmsg}/>
        </>
    )
}

export default Signup;