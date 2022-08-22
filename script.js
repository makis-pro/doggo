const menuIcon = document.querySelector("#menuIcon");
const menuList = document.querySelector("#menuList");
const header = document.querySelector("header");
const menu = document.querySelector("menu");
menuIcon.addEventListener("click", () => {
  if ((menuList.style.display = "none")) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

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
      // form1.style.transition = "2s";
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
      // form2.style.transition = "2s";
    }
  });
}

formFunction();

// if ((form2.style.display = "none") && (form1.style.display = "block")) {
//   form1.style.display = "none";
//   form2.style.display = "none";
// } else {
// }

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
// const

// ========FORM FILLING======
const eMail = document.querySelector("#eMail");
eMail.addEventListener("click", () => {
  if (eMail.contains(".com", ".yahoo", ".outlook")) {
    alert("The e-mail address is valid");
  } else {
    alert("Please input a valid E-mail account");
  }
});

// if(eMail.contains(".com")
// alert("Please input valid E-mail adress");

// };
