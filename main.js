// HTML ITEMS
const jumboButtonLeft = document.getElementById("jumbo-go-left");
const jumboButtonRight = document.getElementById("jumbo-go-right");
const jumboImg = document.getElementById("jumbo-img");
const jumboDescription = document.getElementById("jumbo-description");
const jumboTitle = document.getElementById("jumbo-title");
const secondaryImgsHtml = document.getElementById("secondary-imgs");

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

//creo la sezione con le immagini all'interno
const generateSecondaryImgs = (imageArray, outputContainer) => {
  let secondaryImgs = ``;
  imageArray.forEach((element, index) => {
    secondaryImgs += `
    <div class="col">
    <img src="./img/${element.img}" id="img${index + 1}">
    </div>`;
  });
  outputContainer.innerHTML = secondaryImgs;

  const nodeArray = document.querySelectorAll("#secondary-imgs img");

  return nodeArray;
};

//recupero i nodi delle immagini appena generate
const secondaryImgsArray = generateSecondaryImgs(imgSlider, secondaryImgsHtml);

console.log(secondaryImgsArray.length);

//cambio immagine jumbo cliccando le immagini secondarie
secondaryImgsArray.forEach((element, index) => {
  element.addEventListener("click", () => {
    jumboImg.src = element.src;
    rotatingImage = index;
  });
});

//creo la sezione dentro l'html con le immagini generate

let rotatingImage = 0;

//cambio immagine jumbo dai tasti

jumboButtonLeft.addEventListener("click", () => {
  const currentImage = imgSlider[rotatingImage].img;

  jumboImg.src = `./img/${currentImage}`;
  jumboTitle.innerText = currentImage.title;
  jumboDescription.innerText = currentImage.description;

  if (rotatingImage == 0) {
    rotatingImage = 4;
  } else {
    rotatingImage--;
  }
  setInterval.forward = false;
  setInterval.backward = true;
});

jumboButtonRight.addEventListener("click", () => {
  const currentImage = imgSlider[rotatingImage];

  jumboImg.src = `./img/${currentImage.img}`;
  jumboTitle.innerText = currentImage.title;
  jumboDescription.innerText = currentImage.description;

  if (rotatingImage == 4) {
    rotatingImage = 0;
  } else rotatingImage++;
  setInterval.backward = false;
  setInterval.forward = true;
});

//AUTOPLAY
setInterval(() => {
  const currentImage = imgSlider[rotatingImage];
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

  jumboImg.src = `./img/${currentImage.img}`;
  jumboTitle.innerText = currentImage.title;
  jumboDescription.innerText = currentImage.description;
}, 1000);

// Da gestire handler che impedisce bug corrente dello switch immagini
