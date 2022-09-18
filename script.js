const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});

// DARK THEME FUNCTION

const body = document.querySelector("body");
const header = document.querySelector("header");
const section1 = document.querySelector(".section1");
const main = document.querySelector("main");
const section2 = document.querySelector(".section2");
const footer = document.querySelector("footer");
const toggleIcon = document.querySelector("#dark-theme");
toggleIcon.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  header.classList.toggle("dark-theme");
  section1.classList.toggle("dark-theme");
  main.classList.toggle("dark-theme");
  section2.classList.toggle("dark-theme");
  footer.classList.toggle("dark-theme");
  // body.classList.toggle("dark-theme");
});

// SIGN IN AND LOGGING IN FUNCTION

function formFunction() {
  const logIn = document.querySelector("#log-in");
  const signIn = document.querySelector("#sign-in");
  const form1 = document.querySelector("#form1");
  const form2 = document.querySelector("#form2");
  const getStarted = document.querySelector(".get-started");
  logIn.addEventListener("click", () => {
    if ((form1.style.display = "none") && (form2.style.display = "block")) {
      form1.style.display = "block";
      form2.style.display = "none";
    } else {
      form1.style.display = "none";
    }
  });

  getStarted.addEventListener("click", () => {
    if ((form1.style.display = "none")) {
      form1.style.display = "block";
    } else {
      form1.style.display = "none";
    }
  });

  signIn.addEventListener("click", () => {
    if ((form2.style.display = "none") && (form1.style.display = "block")) {
      form2.style.display = "block";
      form1.style.display = "none";
    } else {
      form2.style.display = "block";
    }
  });
}

formFunction();

const btn = document.querySelector("#btn");
const dogs = document.querySelector("#dogs");

btn.addEventListener("click", () => {
  if (dogs.classList.contains("hidden")) {
    dogs.classList.remove("hidden");
  } else {
    dogs.classList.add("hidden");
  }
});

const getStarted = document.querySelector("#getStarted");

// ========FORM FILLING(not fully active)======
const eMail = document.querySelector("#eMail");
eMail.addEventListener("click", () => {
  if (eMail.contains(".com", ".yahoo", ".outlook")) {
    alert("The e-mail address is valid");
  } else {
    alert("Please input a valid E-mail account");
  }
});
