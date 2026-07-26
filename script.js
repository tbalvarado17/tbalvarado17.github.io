let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  // Reset loop if index exceeds slide count
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }    
  
  // Display active slide
  slides[slideIndex - 1].style.display = "block";  
  
  // Change image every 3 seconds
  setTimeout(showSlides, 3000); 
}
