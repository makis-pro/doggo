// MENU TOGGLE BETWEEN THE OPEN STATES

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("open");
});

// DARK THEME FUNCTION

const header = document.querySelector("header");
const section1 = document.querySelector(".section1");
const main = document.querySelector("main");
const form = document.querySelector("form");
const section2 = document.querySelector(".section2");
const footer = document.querySelector("footer");
const toggleIcon = document.querySelector("#dark-theme");
toggleIcon.addEventListener("click", () => {
  header.classList.toggle("dark-theme");
  header.style.transition = "all .3s";
  menu.classList.toggle("dark-theme");
  nav.classList.toggle("dark-theme");
  nav.style.transition = "all .3s";
  main.classList.toggle("dark-theme");
  main.style.transition = "all .3s";
  form.classList.toggle = ".dark-theme";
  form.style.transition = "all .3s";
  section1.classList.toggle("dark-theme");
  section1.style.transition = "all .3s";
  section2.classList.toggle("dark-theme");
  section2.style.transition = "all .3s";
  footer.classList.toggle("dark-theme");
  footer.style.transition = "all .3s";
});

// SIGN IN AND LOGGING IN FUNCTION

function formFunction() {
  const logIn = document.querySelector("#log-in");
  const form1 = document.querySelector("#form1");
  const form2 = document.querySelector("#form2");
  logIn.addEventListener("click", () => {
    if ((form1.style.display = "none") && (form2.style.display = "block")) {
      form1.style.display = "block";
      form2.style.display = "none";
    } else {
      form1.style.display = "none";
    }
  });
}

formFunction();

// const btn = document.querySelector("#btn");
// const dogs = document.querySelector("#dogs");

// btn.addEventListener("click", () => {
//   if (dogs.classList.contains("hidden")) {
//     dogs.classList.remove("hidden");
//   } else {
//     dogs.classList.add("hidden");
//   }
// });

// ========FORM FILLING(not fully active)======
// const eMail = document.querySelector("#eMail");
// eMail.addEventListener("click", () => {
//   if (eMail.contains(".com", ".yahoo", ".outlook")) {
//     alert("The e-mail address is valid");
//   } else {
//     alert("Please input a valid E-mail account");
//   }
// });
