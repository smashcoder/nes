import '/Users/thatcrazydeveloper/React-Project/nes/src/css/CSuiteForm.css';

function CSuiteForm() {
    return (
        <div className='div-style'>
            <h1 className='title'>CSuite Registration Form</h1>
            <form className='form-cs'>
                <input type="text" placeholder='Person Email' />
                <button className='form-cs-bt'>Submit</button>
            </form>
        </div>
    );
}

export default CSuiteForm;