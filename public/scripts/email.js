
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("XtsHSzp-McZUH5zqS");
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
        .send("portofolio_k7p4zrl", "template_akpteej", {
          name: name.value, 
          email: email.value, 
          message: message.value
        })
        .then(() => {
          console.log("success");
          window.showSuccess('Mensaje enviado!')
          submitButton.disabled = false;
          submitButton.classList.remove('disable-button');
        })
        .catch((error) => {
          console.error(error);
          window.showError('Hubo un error al enviar el correo, prueba nuevamente en unos minutos!')
          submitButton.disabled = false;
          submitButton.classList.remove('disable-button');
        });
    });
  }
});