const images = document.querySelector(".images"),
firstImg = images.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".parent i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = images.scrollWidth - images.clientWidth ;

const showHideIcons = () => {
  arrowIcons[0].style.display = images.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = images.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    images.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
  });

const dragStart = (e) => {
  e.preventDefault();
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = images.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  images.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
};

images.addEventListener("mousedown", dragStart);
images.addEventListener("mousemove", dragging);
images.addEventListener("mouseup", dragStop);
images.addEventListener("mouseleave", dragStop);

