// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";


HTMLElement.prototype.swapClasses = function(dosclasses) {
    //progressContainer.style.display = 'none';
    //clearTimeout(timer);
    console.log('hello');
    var clases = dosclasses.split(/\s*\,\s*/);
    var entra = clases[0];
    var sale = clases[1];
    if (this.classList.contains(sale)) {
        this.classList.remove(sale);
        this.classList.add(entra);
    } else {
        this.classList.remove(entra);
        this.classList.add(sale);
    }
    return this;
};

// addEventListener('scroll', (event) => {});
// const garland = document.getElementById('garland');

// onscroll = (event) => {
// 	console.log('scrolling');
// 	garland.style.top = garland.style.top - 1;
	

//  };

window.addEventListener("scroll", function() {
  const distance = window.scrollY * -1.7;
  document.querySelector("#garland").style.transform = `translateY(${distance *
    1}px)`
})


// const spotlightEl = document.querySelector("#spotlight");

// function handleMouseMove(event) {
//     const { clientX, clientY } = event;

//     spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 600px)`;
// }

// document.addEventListener("mousemove", handleMouseMove)