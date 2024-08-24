const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');


function saveFormData() {
  
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email: formData.email.trim(),
        message: formData.message.trim()
    }));
}


function loadFormData() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email || ""; 
        formData.message = message || ""; 
        document.getElementById('email').value = formData.email;
        document.getElementById('message').value = formData.message;
    }
}


form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveFormData();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

  
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
});


document.addEventListener('DOMContentLoaded', loadFormData);