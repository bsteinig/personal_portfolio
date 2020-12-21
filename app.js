
//Header Intro Animation
const backsplash = document.querySelector('.backsplash');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const react = document.querySelector('.react');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();
//Animation
tl.fromTo(backsplash, 1, {height: "0%" }, { height: "80%", ease: Power2.easeInOut})
    .fromTo(
        backsplash,
        1.2,
        { width: "100%"},
        { width: "80%", ease: Power2.easeInOut }
    )
    .fromTo(
        slider, 
        1.2, 
        {x: "-100%"}, 
        {x: "0%", ease: Power2.easeInOut }, 
        "-=1.2"
    )
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, {opacity: 1, x: 0 }, "-=0.5");



// ------------------ Work Experience Card Animations ---------------------------//

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const company = document.querySelector(".companyLogo img");
const description = document.querySelector(".info h3");

//Animations
container.addEventListener("mousemove", (e) => {
    let xAxis = (-window.innerWidth / 2 + e.pageX) / 25;
    let yAxis = (window.innerHeight - e.pageY * .75) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  //Animate In
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(50px)";
    company.style.transform = "translateZ(100px) rotateZ(35deg)";
    description.style.transform = "translateZ(25px)";
  });
  //Animate Out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    company.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
  });