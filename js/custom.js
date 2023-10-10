// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-22.91090786057141, -43.66470404342933),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Rolagem suave para o topo ao clicar no botão
document.getElementById("goToTopBtn").addEventListener("click", function () {
    // Obter a posição atual da página
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Definir a altura máxima para a animação
    var maxHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    // Calcular a velocidade da rolagem com base na posição atual
    var scrollSpeed = Math.ceil(currentPosition / 5);

    // Função de animação de rolagem suave
    function smoothScroll() {
        if (currentPosition > 0) {
            window.requestAnimationFrame(function () {
                // Calcula a próxima posição de rolagem suave
                currentPosition -= scrollSpeed;
                if (currentPosition < 0) {
                    currentPosition = 0;
                }

                // Efetua a rolagem
                document.documentElement.scrollTop = currentPosition;
                document.body.scrollTop = currentPosition;

                // Chama a função novamente
                smoothScroll();
            });
        }
    }

    // Inicia a rolagem suave
    smoothScroll();
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Remove a classe .active de todas as imagens
            images.forEach(function (img) {
                img.classList.remove('active');
            });

            // Adiciona a classe .active apenas à imagem clicada
            image.classList.add('active');
        });
    });
});


// JavaScript para abrir e fechar o modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modal-image");
const images = document.querySelectorAll(".image img");
const closeBtn = document.querySelector(".close");

// Abrir o modal ao clicar em uma imagem
images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = image.src;
    });
});

// Fechar o modal ao clicar no botão de fechar ou fora do modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


