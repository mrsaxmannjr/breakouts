const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", getFormData);

function getFormData(event) {
  event.preventDefault();
  let userData = new FormData(form);
  userData = {
    subject: userData.get("subject"),
    message: userData.get("message"),
  };
  console.log(userData);
}

// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", formSubmitted);

// function formSubmitted(event) {
//   event.preventDefault();
//   console.log("Form was Submitted");

//   const formData = new FormData(form);
//   const message = formData.get("message");
//   console.log(message);

//   console.log(data);
// }
