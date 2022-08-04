let firstImg = document.getElementsByClassName("firstImg");
let secondImg = document.getElementsByClassName("secondImg");
let title = document.getElementById("title");
let subtitle = document.getElementById("subtitle");
let dateOfBirth = document.getElementById("dateOfBirth");

let skeletons = document.querySelectorAll(".skeleton");

let name = document.getElementById("name");

console.log(firstImg);

setTimeout(() => {
  firstImg[0].src =
    "/Users/michaelgalan/Desktop/SUMMER2022/images /numbers.jpg";
  secondImg[0].src =
    "/Users/michaelgalan/Desktop/SUMMER2022/images /ezgif.com-gif-maker.jpg";

  title.insertAdjacentText("beforeend", "Lorem ipsum dolor sit amet.");
  subtitle.insertAdjacentText(
    "beforeend",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, voluptate."
  );

  name.insertAdjacentText("beforeend", "Edward Snowden");
  dateOfBirth.insertAdjacentText("beforeend", "June 21, 1983");

  skeletons.forEach((skeleton) => {
    skeleton.classList.remove("skeleton");
    skeleton.classList.remove("skeleton-text");
  });
}, 3000);
