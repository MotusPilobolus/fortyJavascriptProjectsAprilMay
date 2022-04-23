// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = new Date().getFullYear();
document.getElementById("date").innerHTML = date;

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;
   if (containerHeight === 0) {
       linksContainer.style.height = `${linksHeight}px`;
       console.log(linksHeight);
   } else {
       linksContainer.style.height = 0;
       console.log(linksHeight);
   };
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if ( navHeight < scrollHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})
// ********** smooth scroll ************
// select links
