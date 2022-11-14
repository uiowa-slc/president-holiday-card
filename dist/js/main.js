window.addEventListener("scroll", function() {
  // const distance = window.scrollY;
  const distance = window.scrollY * -1.7;

  document.querySelector("#garland__container").style.transform = `translateY(${distance}px)`
  document.querySelector("#card-back").style.transform = `translateY(${distance * 0.2}px)`
  // document.querySelector("#card").style.height = `${document.querySelector("#card-front").offsetHeight + document.querySelector("#card-back").offsetHeight + distance * 1.2}px`;
  // document.querySelector("#body").style.overflowY = `hidden`;
  // document.querySelector("#body").style.height = `300px`;

  if(distance < -200 ){
    document.querySelector("#arrow").style.opacity = 0;
  }
})


// const spotlightEl = document.querySelector("#spotlight");

// function handleMouseMove(event) {
//     const { clientX, clientY } = event;

//     spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 600px)`;
// }

// document.addEventListener("mousemove", handleMouseMove)