const imgs = document.querySelectorAll('img');
let displayImg = 0;

imgs[displayImg].style.opacity = '1';

const imgChange = () => {
  imgs[displayImg].style.opacity = '0';

  displayImg = displayImg + 1;
  if (displayImg === imgs.length - 1) displayImg = 0;
  imgs[displayImg].style.opacity = '1';
};

setInterval(imgChange, 7000);
