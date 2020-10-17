// CRIEI UM OBJETO QUE REMOVE A DINAMICA DO MAPA
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
};
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;
// CREATE MAP
const map = L.map("mapid", options).setView([lat, lng], 15);
// CREATE AND ADD TILELAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2],
});
// CREATE AND ADD MAKER
L.marker([lat, lng], { icon }).addTo(map);

// IMAGE GALLERY
function selectImage(event) {
    const button = event.currentTarget;

    // REMOVE ALL THE .active CLASSES
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active");
    }
    // SELECT THE CLICKED IMAGE 
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    
    // REFRESH THE IMAGE CONTAINER
    imageContainer.src = image.src;
    
    // ADD BACK THE .active CLASS FOR THIS BUTTON
    button.classList.add("active");
}