import React from 'react';
import '../styles/Login.scss';
import '../styles/components/Form.scss';
import '../styles/components/Logo.scss';

const RecoveryPassword = () => {
    return (
        <div className='login'>
            <div className='form-container'>
                <img src="/" alt="logo" className='logo' />
                <h1 className='title'>Email has been sent!</h1>
                <p className='subtitle'>Please check your inbox for instructions on how you can to reset your password</p>
                <div className='email-image'>
                    <img src="/" alt="emial" />
                </div>

                <button className='primary-button login-button'>Login</button>
                <p className='resend'>
                    <span>Didn't received the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    )
}

export default RecoveryPassword;