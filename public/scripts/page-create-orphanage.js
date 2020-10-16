// CREATE MAP
const map = L.map('mapid').setView([-23.1716012,-46.915911], 15);
// CREATE AND ADD TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// CREATE AND ADD MAKER
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldContainer[fieldsContainer.length-1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //limpar o novo campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value=""
        return
    }
    //deletar o campo
    span.parentNode.remove

}
//select yes or no
function toggleSelect() {
    //retirar a classe .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function (button){
        button.classList.remove()
    })
    //colocar a classe .active 
    const button = event.currentTarget
    button.classList.add('active')

    //pegar o botao clicado

    

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    
    //verificar se sim ou não
    input.value = button.dataset.value

}
