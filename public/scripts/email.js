import { showError, showSuccess } from "./toast";

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init({ publicKey: import.meta.env.PUBLIC_EMAIL_KEY });
  const form = document.getElementById("contact-form");
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  const submitButton = document.getElementById('submit-button')

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log('FORM VALUE', {name, email, message})
      submitButton.disabled = true;
      submitButton.classList.add('disable-button');
      emailjs
        .send(import.meta.env.PUBLIC_SERVICE_ID, import.meta.env.PUBLIC_TEMPLATE_ID, {
          name: name.value, 
          email: email.value, 
          message: message.value
        })
        .then(() => {
          console.log("success");
          showSuccess('Mensaje enviado!')
          submitButton.disabled = false;
          submitButton.classList.remove('disable-button');
        })
        .catch((error) => {
          console.error(error);
          showError('Hubo un error al enviar el correo, prueba nuevamente en unos minutos!')
          submitButton.disabled = false;
          submitButton.classList.remove('disable-button');
        });
    });
  }
});