const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");
const image = document.querySelector(".img");
const description = document.querySelector(".description")
const modelhead = document.querySelector(".modelhead")

console.log(image)
const option = {
  root: null,
  rootMargin: "0px",
  thresold: 0.4,
};
let featureObserver = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList[1] == "page2") {
        image.style.marginTop = "0"
        description.style.marginTop = "0"
    } 
}
else {
    image.style.marginTop = "-150rem"
    description.style.marginTop = "150rem"
      }
  });
}, option);

  let modelTitleObserver = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList[1] == "page3") {
            modelhead.style.opacity = "1"
        } 
    }
    else {
        modelhead.style.opacity = "0"
    }
});
}, option);

let modelsOberserver = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList[1] == "page4") {
                page4.style.columnGap = "2rem"
                page4.style.opacity = "1"
            } 
        }
        else {
        page4.style.opacity = "0"
        page4.style.columnGap = "10rem"
        }
    });
  }, option);
featureObserver.observe(page2);
modelTitleObserver.observe(page3)
modelsOberserver.observe(page4)
