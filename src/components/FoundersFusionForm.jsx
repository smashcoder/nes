import '/Users/thatcrazydeveloper/React-Project/nes/src/css/FoundersFusionForm.css';

function FoundersFusionForm() {
    return (
        <div className='div-style'>
            <h1 className='title'>Founders Fusion Registration Form</h1>
            <form className='form-ff'>
                <input type="text" placeholder='Person Email' />
                <input type="text" placeholder='Startup Idea' />
                <input type="text" placeholder='Startup Description' />
                <button className='form-ff-bt'>Submit</button>
            </form>
        </div>
    );
}

export default FoundersFusionForm;