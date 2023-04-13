import '/Users/thatcrazydeveloper/React-Project/nes/src/css/AdminForm.css';

function AdminForm() {
    return (
        <div className='div-style'>
            <h1 className='title'>Admin Registration Form</h1>
            <form className="form-admin">
                <input type = "text" placeholder="Name" className='admin-name'/>
                <input type = "text" placeholder="Email ID" className='admin-id'/>
                <input type = "password" placeholder="Password" className='admin-pass'/>
                <button className='form-bt'>Submit</button>
            </form>
        </div>
    );
}

export default AdminForm;