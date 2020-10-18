//create map
const map = L.map("mapid").setView([-29.4144252,-51.9637496], 15);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remover icon
  //olhar se tem algum marker
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio. Se sim não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
  //retirar a classe .active (dos botoes)
  document.querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //colocar a classe .active nesse botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  //pegar o botão clicados
  
  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weenkends"]');
  
  //verificar se é sim ou não
  input.value = button.dataset.value

}

 //validar se lat e lng estão preenchidos
/*function validade(event){
  const needsLatAndLng = true;
  
  if (needsLatAndLng) {
    event.preventDefault();
    alert("Preencha um ponto no mapa")
  }
 
 
}*/