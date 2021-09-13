import React, {useState} from "react";
import {connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from '../../redux/user/user.actions';


const SignUp = ({signUpStart}) =>{

   const [userCredentials, setUserCredentials] = useState({
       displayName: '',
       email:'',
       password: '',
       confirmPassword: '',
   });

   const { displayName, email, password, confirmPassword } = userCredentials;
   const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userCredentials;

        if(password !== confirmPassword ){
            alert('password did not match');
            return;
        }
        signUpStart({displayName, email, password});

        


    };

   const handleChange = event => {
        const {name, value } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    
       
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>sign up with your email and password</span>

                <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput type='text' name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Dispaly Name'
                        required />

                    <FormInput type='email' name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required />

                    <FormInput type='password' name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required />

                    <FormInput type='password' name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required />

                <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }



const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})
export default connect(null, mapDispatchToProps)(SignUp);