// Typing Effect
const text = [
  "Front-End Developer",
  "JavaScript Developer",
  "Node.js Learner",
  "Web Designer"
];

let i = 0;
let j = 0;
let current = "";
let letter = "";

function type() {
  if (i === text.length) i = 0;
  current = text[i];
  letter = current.slice(0, ++j);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === current.length) {
    i++;
    j = 0;
  }

  setTimeout(type, 120);
}

type();

// Highlight navbar links while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});


// progree bar
const bars = document.querySelectorAll(".fill");

bars.forEach(bar => {
  const percent = bar.getAttribute("data-percent");
  bar.style.width = percent;
  bar.textContent = percent;
});


// contact page
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value
    }
  )
  .then(() => {
    msg.textContent = "Message sent successfully! I'll contact you soon.";
    msg.style.color = "#4dd2ff";
    form.reset();
  })
  .catch(() => {
    msg.textContent = "Something went wrong. Please try again.";
    msg.style.color = "red";
  });
});


