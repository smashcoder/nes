import '/Users/thatcrazydeveloper/React-Project/nes/src/css/LoginPage.css';
import React, { useState } from 'react';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    }

    // handle input changes
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    return (
        <div className="lgpage">
            <div className='bx'>
                <div className='bx-1'>
                    <input type="text" placeholder='Email ID' value={username} onChange={handleUsernameChange} />
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                </div>
                <div className='bx-2'>
                    <button className='fp'>Forgot Password ?</button>
                    <button className='login-bt' type='submit' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;