


const arrow = document.querySelector("#arrow");
const video = document.querySelector("#card-back__video");
const topImg = document.querySelector("#card-back__top-img");
const bottomImg = document.querySelector("#card-back__bottom-img");

const topObserverOptions = {
  root: null,
  rootMargin: "0%",
  threshold: 0.75,
};
const bottomObserverOptions = {
  root: null,
  rootMargin: "0%",
  threshold: 0,
};
const topImgObserver = new IntersectionObserver(
  handleTopIntersection,
  topObserverOptions
);
const bottomImgObserver = new IntersectionObserver(
  handleBottomIntersection,
  bottomObserverOptions
);

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 3000,
  speedAsDuration: true,
  offset: 150
});

// Arrow fade away and parallax on scroll:
window.addEventListener("scroll", function () {
  const distance = window.scrollY * -1.7;
  document.querySelector(
    "#garland__container"
  ).style.transform = `translateY(${distance}px)`;
  document.querySelector("#card-back").style.transform = `translateY(${
    distance * 0.2
    }px)`;
    // document.querySelector("#inside").style.transform = `translateY(${
    //   distance * 0.3
    // }px)`;
  if (distance < -200) {
    arrow.style.opacity = 0;
  } else {
    arrow.style.opacity = 100;
  }
});

// Book fall animation timing:
topImgObserver.observe(topImg);
bottomImgObserver.observe(bottomImg);
var topVisible = true;
var bottomVisible = false;
var playPromise;
var gifEnabled = false;

// Reset video when top half of the inside of the card isn't visible:
function handleTopIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      topVisible = true;

      if (!bottomVisible) {
        // If we've previously tried to play a video but failed,
        // don't use a timer, just replay the GIF right away to
        // prevent the gif loop from being visible:
        if (gifEnabled) {
          playBookfallGif();
        } else {
          // only play video if it's been fully reset or hasn't played yet.
          if (video.currentTime == 0) {
            setTimeout(() => {
              playPromise = video.play();

              if (playPromise !== undefined) {
                playPromise
                  .then(function () {
                    // Automatic playback is enabled and started.
                  })
                  .catch(function (error) {
                    // Automatic playback is disabled, replace with GIF:
                    gifEnabled = true;
                    playBookfallGif();
                  });
              }
            }, 1000);
          }
        }
      }
    } else {
      topVisible = false;
      // Reset video after one second if bottom isn't visible either.
      if (!bottomVisible) {
        video.pause;
        video.currentTime = 0;
      }
    }
  });
}
// Removes video and replaces it with a GIF.
function playBookfallGif() {
  video.remove();
  // If we've already played the GIF once, we want to "loop" it by
  // removing the GIF first and re-adding it.
  if ((bookfallGifExisting = document.getElementById("bookfall-gif"))) {
    bookfallGifExisting.remove();
  }
  var bookfallGif = document.createElement("img");
  bookfallGif.id = "bookfall-gif";
  bookfallGif.height = 756;
  bookfallGif.width = 600;
  bookfallGif.src = "dist/images/bookfall.gif";
  bookfallGif.classList.add("bookfall-gif");
  document.getElementById("bookfall").appendChild(bookfallGif);
}

// Toggle bottomVisible when bottom part of card is visible/invisible.
function handleBottomIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      bottomVisible = true;
    } else {
      bottomVisible = false;
    }
  });
}


