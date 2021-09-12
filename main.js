const slides = document.querySelectorAll(".slide");
const intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check if next sibling has class of slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //Add current to first sibling/start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Auto slide
slideInterval = setInterval(nextSlide, intervalTime);
