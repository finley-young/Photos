
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".column img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < img.length; i++) {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.display = "block"; // Display the image

    
    // Set maximum height and width of the image
    modalImg.style.maxHeight = "85vh"; // 60% of viewport height
    modalImg.style.maxWidth = "60vw"; // 60% of viewport width

    // Center the image horizontally and vertically
    modalImg.style.margin = "auto";
    modalImg.style.position = "absolute";
    modalImg.style.top = "50%";
    modalImg.style.left = "50%";
    modalImg.style.transform = "translate(-50%, -50%)";

    captionText.innerHTML = this.alt;
    captionText.style.display = "block"; // Display the caption
    captionText.style.textAlign = "center"; // Center the caption
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

