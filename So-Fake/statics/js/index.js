window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Carousel setup
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Initialize all carousels
    bulmaCarousel.attach('.carousel', options);

    // Initialize sliders
    bulmaSlider.attach();
});

// Add the collapsible panel function
function toggleCollapse(id, headerBox) {
    const content = document.getElementById(id);
    const icon = headerBox.querySelector('i');

    if (!content || !icon) return;

    const isHidden = content.style.display === '' || content.style.display === 'none';
    content.style.display = isHidden ? 'block' : 'none';

    icon.classList.toggle('fa-chevron-down', !isHidden);
    icon.classList.toggle('fa-chevron-up', isHidden);
}
