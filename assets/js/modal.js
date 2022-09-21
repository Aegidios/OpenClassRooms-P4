function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalConfirm = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const birthdateError = document.getElementById('birthdateError');
const quantityError = document.getElementById('quantityError');
const radios = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.querySelector("#checkbox1");
const form = document.querySelector('form[name="reserve"]');
const buttonClose = document.getElementById('buttonClose');
const modalClose2 = document.querySelector(".close2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

//Validation of form
function validate(){
  let isFirstNameValid = firstNameVerification(),
      isLastNameValid = lastNameVerification(),
      isEmailValid = emailVerification();
      isQuantityValid = quantityVerification();
      isRadioValid = radioVerification();
      isCheckboxValid = checkboxVerification();
      isBirthdateValid = birthdateVerification();

  let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isQuantityValid && isRadioValid && isCheckboxValid && isBirthdateValid;
  
  if(isFormValid){
    modalConfirm.style.display = "block";
    modalbg.style.display = "none";

    buttonClose.addEventListener("click", closeModal2);
    modalClose2.addEventListener("click", closeModal2);

    function closeModal2(){
      form.submit();
    }
  }
  return false;
}

// event listener on my fields
firstName.addEventListener("keyup", firstNameVerification);
lastName.addEventListener("keyup", lastNameVerification);
email.addEventListener('keyup', emailVerification);
quantity.addEventListener('change', quantityVerification);
checkbox1.addEventListener("change", checkboxVerification);
birthdate.addEventListener("change", birthdateVerification);


// verification of firstname field
function firstNameVerification(){
  let response;
  let filter = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  if(!firstName.validity.valid || firstName.value.length < 2 || !filter.test(firstName.value)){
    /* console.log('Veuillez rentrer au moins 2 caractères'); */
    firstNameError.innerHTML = "Veuillez rentrer au moins 2 caractères";
    response = false;
  }else{
    firstNameError.innerHTML = "";
    response = firstName.value;
  }
  console.log(response);
  return response;
}

// verification of lastname field
function lastNameVerification(){
  let response = false;
  let filter = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  lastNameError.innerHTML = "Veuillez rentrer au moins 2 caractères";
  if(lastName.value.length >= 2 && filter.test(lastName.value)){
    
    lastNameError.innerHTML = "";
    response = lastName.value;
  }
  console.log(response);
  return response;
}

// verification of email field
function emailVerification(){
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let response;
  if(!filter.test(email.value)){
    emailError.innerHTML = "Veuillez rentrer une adresse mail valide";
    response = false;
  }else{
    emailError.innerHTML = "";
    response = email.value;
  }
  console.log(email.value);
  return response;
}

// verification of quantity field
function quantityVerification(){
  let response = true;
  quantityError.innerHTML = "";
  console.log(quantity.value);
  if(!quantity.value){
    quantityError.innerHTML = "Veuillez rentrer une valeur";
    reponse = false;
  }
  console.log(response);
  return response;
}

// loop on my radios field
for (let index = 0; index < radios.length; index++) {
  const item = radios[index];
  item.addEventListener('click', radioVerification);
}

// verification of radio check
function radioVerification(){
  let response = false;
  radioError.innerHTML = "Veuillez sélectionner une valeur";
  for (let index = 0; index < radios.length; index++) {
    const radio_index = radios[index];
    
    if(radio_index.checked){
      response = radio_index.value;
      console.log(response);
      radioError.innerHTML = "";
      break;
    }
  }
  
  return response;
}

// verification of checkbox field
function checkboxVerification(){
  let response = false;
  checkboxError.innerHTML = "Veuillez accepter les conditions d'utilisation";
    if(checkbox1.checked){
      response = true;
      checkboxError.innerHTML = "";
    }
  return response;
}

// verification of birthdate field
function birthdateVerification(){
  let response = false;
  birthdateError.innerHTML = "Veuillez entrer votre date de naissance";
  if(birthdate.value){
    birthdateError.innerHTML = "";
    response = birthdate.value;
    console.log(response);
  }
  return response;
}
