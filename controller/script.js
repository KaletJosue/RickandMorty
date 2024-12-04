var personaje = "Rick"

var h1 = document.querySelector('.carrusel h1')
var container = document.querySelector('.carrusel')

var btnRick = document.querySelector('.rick')
var btnMorty = document.querySelector('.morty')
var btnJerry = document.querySelector('.jerry')
var btnBeth = document.querySelector('.beth')
var btnSummer = document.querySelector('.summer')

var imgRick = document.querySelector('.img_rick')
var imgMorty = document.querySelector('.img_morty')
var imgJerry = document.querySelector('.img_jerry')
var imgBeth = document.querySelector('.img_beth')
var imgSummer = document.querySelector('.img_summer')

btnRick.addEventListener('click', () => {
    imgRick.classList.remove('out')
    imgRick.classList.add('active')

    if (imgMorty.classList.contains('active')) {
        imgMorty.classList.add('out')
        imgMorty.classList.remove('active')
    }

    if (imgJerry.classList.contains('active')) {
        imgJerry.classList.add('out')
        imgJerry.classList.remove('active')
    }

    if (imgBeth.classList.contains('active')) {
        imgBeth.classList.add('out')
        imgBeth.classList.remove('active')
    }

    if (imgSummer.classList.contains('active')) {
        imgSummer.classList.add('out')
        imgSummer.classList.remove('active')
    }

    h1.textContent = "Rick Sánchez"
    h1.style.color = "#a4d5ea"
    imgRick.style.filter = "drop-shadow(0 0 10px #a4d5ea)"
})

btnMorty.addEventListener('click', () => {
    imgMorty.classList.remove('out')
    imgMorty.classList.add('active')

    if (imgRick.classList.contains('active')) {
        imgRick.classList.add('out')
        imgRick.classList.remove('active')
    }

    if (imgJerry.classList.contains('active')) {
        imgJerry.classList.add('out')
        imgJerry.classList.remove('active')
    }

    if (imgBeth.classList.contains('active')) {
        imgBeth.classList.add('out')
        imgBeth.classList.remove('active')
    }

    if (imgSummer.classList.contains('active')) {
        imgSummer.classList.add('out')
        imgSummer.classList.remove('active')
    }

    h1.textContent = "Morty Smith"
    h1.style.color = "#e9dc69"
    imgMorty.style.filter = "drop-shadow(0 0 10px #e9dc69)"
})

btnJerry.addEventListener('click', () => {
    imgJerry.classList.remove('out')
    imgJerry.classList.add('active')

    if (imgRick.classList.contains('active')) {
        imgRick.classList.add('out')
        imgRick.classList.remove('active')
    }

    if (imgMorty.classList.contains('active')) {
        imgMorty.classList.add('out')
        imgMorty.classList.remove('active')
    }

    if (imgBeth.classList.contains('active')) {
        imgBeth.classList.add('out')
        imgBeth.classList.remove('active')
    }

    if (imgSummer.classList.contains('active')) {
        imgSummer.classList.add('out')
        imgSummer.classList.remove('active')
    }

    h1.textContent = "Jerry Smith"
    h1.style.color = "#5b6737"
    imgJerry.style.filter = "drop-shadow(0 0 10px #5b6737)"
})

btnBeth.addEventListener('click', () => {
    imgBeth.classList.remove('out')
    imgBeth.classList.add('active')

    if (imgRick.classList.contains('active')) {
        imgRick.classList.add('out')
        imgRick.classList.remove('active')
    }

    if (imgMorty.classList.contains('active')) {
        imgMorty.classList.add('out')
        imgMorty.classList.remove('active')
    }

    if (imgJerry.classList.contains('active')) {
        imgJerry.classList.add('out')
        imgJerry.classList.remove('active')
    }

    if (imgSummer.classList.contains('active')) {
        imgSummer.classList.add('out')
        imgSummer.classList.remove('active')
    }

    h1.textContent = "Beth Smith"
    h1.style.color = "#e85256"
    imgBeth.style.filter = "drop-shadow(0 0 10px #e85256)"
})

btnSummer.addEventListener('click', () => {
    imgSummer.classList.remove('out')
    imgSummer.classList.add('active')

    if (imgRick.classList.contains('active')) {
        imgRick.classList.add('out')
        imgRick.classList.remove('active')
    }

    if (imgMorty.classList.contains('active')) {
        imgMorty.classList.add('out')
        imgMorty.classList.remove('active')
    }

    if (imgJerry.classList.contains('active')) {
        imgJerry.classList.add('out')
        imgJerry.classList.remove('active')
    }

    if (imgBeth.classList.contains('active')) {
        imgBeth.classList.add('out')
        imgBeth.classList.remove('active')
    }

    h1.textContent = "Summer Smith"
    h1.style.color = "#e073cc"
    imgSummer.style.filter = "drop-shadow(0 0 10px #e073cc)"
})

var btn_enviar = document.querySelector('.btn_enviar')

var names = document.querySelector('.names')
var lastnames = document.querySelector('.lastnames')
var email = document.querySelector('.email')
var phone = document.querySelector('.phone')
var years = document.querySelector('.years')
var coments = document.querySelector('.coments')

var lista = JSON.parse(localStorage.getItem("list")) || []

btn_enviar.addEventListener('click', () => {
    if (names.value.length != 0) {
        if (lastnames.value.length != 0) {
            if (email.value.length != 0) {
                if (phone.value.length != 0) {
                    if (years.value.length != 0) {
                        if (coments.value.length != 0) {

                            lista.push({
                                nombres: names.value,
                                apellidos: lastnames.value,
                                correo: email.value,
                                telefono: phone.value,
                                edad: years.value,
                                comentario: coments.value
                            });

                            localStorage.setItem("list", JSON.stringify(lista))

                            contact.classList.remove('active')

                            alert("Mensaje enviado")

                            names.value = ""
                            lastnames.value = ""
                            email.value = ""
                            phone.value = ""
                            years.value = ""
                            coments.value = ""

                        } else {
                            alert("Ingresa tu comentario positivo o negativo")
                        }
                    } else {
                        alert("Ingresa tu edad")
                    }
                } else {
                    alert("Ingresa tu numero de telefono")
                }
            } else {
                alert("Ingresa tu correo electronico")
            }
        } else {
            alert("Ingresa tus apellidos")
        }
    } else {
        alert("Ingresa tus nombres")
    }
})

const header = document.querySelector('.sticky');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});
