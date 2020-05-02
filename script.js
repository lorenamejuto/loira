//Gallery zoom
function galleryZoom() {
    var galleryImage = document.querySelectorAll(".galeria article");
    galleryImage.forEach(showZoom);

    function showZoom(image) {
        image.addEventListener("mouseover", function() {
            this.innerHTML = '<img class="gallery-search" src="img/lupa.png">';
        });
        image.addEventListener("mouseout", function() {
            var zoom = document.querySelector('.gallery-search');
            zoom.remove();
        });
    }
}

//Function call on document ready
$(document).ready(function() {
    smoothScroll();
    mobileMenu();
    galleryZoom();
});
