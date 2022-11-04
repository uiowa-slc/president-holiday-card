window.addEventListener("scroll", function() {
  const distance = window.scrollY * -1.7;
  document.querySelector("#garland").style.transform = `translateY(${distance * 1}px)`
  document.querySelector("#back").style.transform = `translateY(${distance * 0.2}px)`
})


// const spotlightEl = document.querySelector("#spotlight");

// function handleMouseMove(event) {
//     const { clientX, clientY } = event;

//     spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 600px)`;
// }

// document.addEventListener("mousemove", handleMouseMove)