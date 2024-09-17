// Get the button
var scrollTopBtn = document.getElementById("scrollTopBtn");


// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } 
};

// When the user clicks on the button, scroll to the top of the document smoothly
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};