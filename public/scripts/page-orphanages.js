// CREATE MAP
const map = L.map('mapid').setView([-23.1716012,-46.915911], 15);
// CREATE AND ADD TILELAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng } = orphanage) {
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240,
    }).setContent(
        `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
    );
    // CREATE AND ADD MAKER
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach((span) => {
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng,
    };
    addMarker(orphanage);
});