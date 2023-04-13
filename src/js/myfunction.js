function handleFileSelect(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('profile-pic-preview');
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.style.display = 'block';
    }
    reader.readAsDataURL(file);
  }
  export default handleFileSelect;  