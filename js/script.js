const form = document.querySelector("form");
const inputs = document.querySelectorAll(".form__input");

const inputError = function (input) {
  input.classList.add("input--error");

  if (input.validity.valueMissing) {
    document.querySelector(
      `.error-msg--${input.name}`
    ).textContent = `${input.placeholder} cannot be empty`;
  }

  if (input.type === "email" && input.validity.typeMismatch) {
    document.querySelector(`.error-msg--${input.name}`).textContent =
      "Looks like this is not an email";
  }
};

const inputSuccess = function (input) {
  input.classList.remove("input--error");
  document.querySelector(`.error-msg--${input.name}`).textContent = "";
};

form.addEventListener("submit", function (e) {
  let count = 0;
  e.preventDefault();
  console.log("Submitted");
  inputs.forEach(function (input) {
    if (!input.validity.valid) inputError(input);
    else {
      inputSuccess(input);
      count++;
      // if (count === 4) {
      //   input.value = '';
      //   setTimeout(function () {
      //     window.alert("Submitted");
      //   }, 500);
      // }
    }
  });
  if (count === 4) {
    inputs.forEach(function (input) {
      input.value = "";
      setTimeout(function () {
        window.alert("Submitted");
      }, 300);
    });
  }
});
