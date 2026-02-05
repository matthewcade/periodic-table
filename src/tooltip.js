const tooltipImage = document.querySelector("#tooltip-image");
const tooltip = document.querySelector("#tooltip");

tooltipImage.addEventListener("mouseenter", function() {
    tooltip.style.opacity = "1";
})