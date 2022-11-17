window.addEventListener("scroll", function() {

  const distance = window.scrollY * -1.7;

  document.querySelector("#garland__container").style.transform = `translateY(${distance}px)`
  document.querySelector("#card-back").style.transform = `translateY(${distance * 0.2}px)`

  // Stuff to try and adjust body height-- doesn't really work:
  // document.querySelector("#card").style.height = `${document.querySelector("#card-front").offsetHeight + document.querySelector("#card-back").offsetHeight + distance * 1.2}px`;
  // document.querySelector("#body").style.overflowY = `hidden`;
  // document.querySelector("#body").style.height = `300px`;

  if(distance < -200 ){
    document.querySelector("#arrow").style.opacity = 0;
  }
})

const target = document.querySelector('#card-back__bottom-img');
const video = document.querySelector('#card-back__video');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log('visible')
      video.play();
    } else {
      video.pause;
      video.currentTime = 0;
      console.log('invisible')
    }
  });
}

 const observerOptions = {
    // root: null,
    // rootMargin: "200px",
    // threshold: 0
  };
const observer = new IntersectionObserver(handleIntersection, observerOptions);
observer.observe(target);