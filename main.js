// HTML ITEMS
const jumboLeft = document.getElementById("jumbo-go-left");
const jumboRight = document.getElementById("jumbo-go-right");
const jumboImg = document.getElementById("jumbo-img");

const imgSlider = [
  {
    img: "01.jpg",
    description: "Description 1",
    title: "Title 1",
  },
  {
    img: "02.png",
    description: "Description 2",
    title: "Title 2",
  },
  {
    img: "03.jpg",
    description: "Description 3",
    title: "Title 3",
  },
  {
    img: "04.jpg",
    description: "Description 4",
    title: "Title 4",
  },
  {
    img: "05.jpg",
    description: "Description 5",
    title: "Title 5",
  },
];

let rotatingImage = 0;

jumboImg.src = "./img/01.jpg";

jumboLeft.addEventListener("click", () => {
  const currentImage = imgSlider[rotatingImage].img;
  jumboImg.src = `./img/${currentImage}`;
  if (rotatingImage == 0) {
    rotatingImage = 4;
  } else {
    rotatingImage--;
  }
  setInterval.forward = false;
  setInterval.backward = true;
});

jumboRight.addEventListener("click", () => {
  const currentImage = imgSlider[rotatingImage].img;
  jumboImg.src = `./img/${currentImage}`;
  if (rotatingImage == 4) {
    rotatingImage = 0;
  } else rotatingImage++;
  setInterval.backward = false;
  setInterval.forward = true;
});

//AUTOPLAY
setInterval(() => {
  const currentImage = imgSlider[rotatingImage].img;
  //se non è ne forward ne backward sta fermo
  if (setInterval.forward) {
    if (rotatingImage == 4) {
      rotatingImage = 0;
    } else rotatingImage++;
  } else if (setInterval.backward) {
    if (rotatingImage == 0) {
      rotatingImage = 4;
    } else rotatingImage--;
  }
  jumboImg.src = `./img/${currentImage}`;
}, 3000);

// Da gestire handler che impedisce bug corrente dello switch immagini
