/*================================================typing animation ==============================*/
var typed = new Typed(".typing", {
  strings: [
    "web Designer",
    "Web Developer",
    "Graphic Designer",
    " DataBase Developer",
    "Dental Technician",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/*================================================ Aside ==============================*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allsection = document.querySelectorAll(".section"),
  totalSection = allsection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeSectionBack();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allsection[j].classList.add("back-section")
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeSectionBack() {
  for (let i = 0; i < totalSection; i++) {
    allsection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allsection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allsection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeSectionBack();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allsection[i].classList.toggle("open");
  }
}
/*image*/
let image = document.getElementById("hassanphoto");
let images = ["images/ENG.Raydin.png", "images/Dental.png"];
let index = 0;

setInterval(function () {
  index = (index + 1) % images.length;
  image.style.opacity = 0; /* تعيين الشفافية إلى صفر لبدء التأثير */
  
  setTimeout(function () {
    image.src = images[index];
    image.style.opacity = 1; /* تعيين الشفافية إلى واحد لانتهاء التأثير */
  }, 1000); /* استخدم نفس مدة التأثير هنا */
}, 3000); /* استخدم نفس فاصل الزمن هنا */
