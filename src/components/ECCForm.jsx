import '/Users/thatcrazydeveloper/React-Project/nes/src/css/ECCForm.css';

function ECCForm() {
    return (
        <div className='div-style'>
            <h1 className='title'> ECC Registration Form</h1>
            <form className='form-ecc'>
                <input type="text" placeholder='Team Name' />
                <div className='f-d'>
                    <input type="text" placeholder='Person 1 Email' className='p-e' />
                    <input type="text" placeholder='Person 2 Email' className='p-e' />
                </div>
                <div className='f-d'>
                    <input type="text" placeholder='Person 3 Email' className='p-e' />
                    <input type="text" placeholder='Person 4 Email' className='p-e' />
                </div>
                <div className='f-d'>
                    <input type="text" placeholder='Mentor Name' className='p-e' />
                    <input type="text" placeholder='PPT Link' className='p-e'/>
                </div>
                <button className='form-ecc-bt'>Submit</button>
            </form>
        </div>
    );
}

export default ECCForm;