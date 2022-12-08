const BTN = document.getElementById("btn__send-email");
const EMAIL = document.getElementById("email");
const REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const MESSAGE_ERROR_EMAIL = document.getElementById("message__error-email");

BTN.addEventListener("click", (e) => {
  e.preventDefault();

  if (EMAIL.value === null || EMAIL.value === "") {
    MESSAGE_ERROR_EMAIL.innerHTML =
      "Whoops! It looks like you forgot to add your email";
    EMAIL.style.outline = "3px solid hsl(354, 100%, 66%)";
    MESSAGE_ERROR_EMAIL.style.margin = ".2em 0 2em 0";
  } else if (EMAIL.value.match(REGEX)) {
    MESSAGE_ERROR_EMAIL.innerHTML = "";
    EMAIL.style.outline = "";
    MESSAGE_ERROR_EMAIL.style.margin = "";
  } else {
    MESSAGE_ERROR_EMAIL.innerHTML = "Please provide a valid email address";
    EMAIL.style.outline = "3px solid  hsl(354, 100%, 66%)";
    MESSAGE_ERROR_EMAIL.style.margin = ".2em 0 2em 0";
  }
});
