import './App.css';
import handleFileSelect from './myfunction';

function App() {
  return (
    <div className='div-style'>
      <h1 className='title'>Registration Form</h1>
      <div className='main-ds'>
        <div className='ds1'>
          <form className='form-style'>
            <div className='name-section'>
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Middle Name' />
              <input type='text' placeholder='Surname' />
            </div>
            <div className='email-pass'>
              <input type='text' placeholder='Email ID' />
              <input type='password' placeholder='Password' />
            </div>
            <input type='text' placeholder='Phone No. 1' />
            <input type='text' placeholder='Phone No. 2' />
            <input type='text' placeholder='College Name' />
            <input type='text' placeholder='City' />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className='ds2'>
          <div className='form-image-section'>
            <img id='profile-pic-preview' src='#' alt='Preview' />
            <label htmlFor='profile-pic'>Profile Picture</label>
            <input type='file' id='profile-pic' name='profile-pic' accept='image/*' onChange={handleFileSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
