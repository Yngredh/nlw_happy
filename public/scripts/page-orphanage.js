// CRIEI UM OBJETO QUE REMOVE A DINAMICA DO MAPA
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// CREATE MAP
const map = L.map('mapid', options).setView([-23.1716012,-46.915911], 15);
// CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
// CREATE AND ADD MAKER
L
.marker([-23.1716012,-46.915911], {icon: icon})
.addTo(map)

// IMAGE GALERY
function selectImage(event) {
    const button = event.currentTarget

    // REMOVE ALL THE .active CLASSES
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    // SELECT THE CLICKED IMAGE 
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    // REFRESH THE IMAGE CONTAINER
    imageContainer.src = image.src
    
    // ADD BACK THE .active CLASS FOR THIS BUTTON
    button.classList.add('active')
}