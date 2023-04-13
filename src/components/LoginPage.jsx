import '/Users/thatcrazydeveloper/React-Project/nes/src/css/LoginPage.css';

function LoginPage() {
    return (
        <div className="lgpage">
            <div className='bx'>
                <div className='bx-1'>
                    <input type="text" placeholder='Email ID' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className='bx-2'>
                    <button className='fp'>Forgot Password ?</button>
                    <button className='login-bt'>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;