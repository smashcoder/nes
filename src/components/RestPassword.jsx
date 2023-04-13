import '/Users/thatcrazydeveloper/React-Project/nes/src/css/RestPassword.css';

function RestPassword() {
    return (
        <div className="lgpage">
            <div className='bx'>
                <div className='bx-1'>
                    <input type="password" placeholder='New Password' />
                    <input type="password" placeholder='Confirm New Password' />
                </div>
                <div className='bx-2-1'>
                    <button className='login-bt'>Change Password</button>
                </div>
            </div>
        </div>
    );
}

export default RestPassword;