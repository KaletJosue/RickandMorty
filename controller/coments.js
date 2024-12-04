fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        var container = document.querySelector('.tbody');
        var lista = JSON.parse(localStorage.getItem("list"));

        lista.forEach((doc, index) => {
            var tr = document.createElement('tr');
            var img = document.createElement('th');
            var names = document.createElement('th');
            var email = document.createElement('th');
            var phone = document.createElement('th');
            var year = document.createElement('th');
            var coment = document.createElement('th');

            var imageElement = document.createElement('img');
            var imgSrc = data.results[index].picture.thumbnail;
            imageElement.src = imgSrc;
            imageElement.alt = "Imagen de usuario";
            imageElement.style.width = '50px';
            imageElement.style.height = '50px';

            img.appendChild(imageElement);

            names.textContent = doc.nombres + " " + doc.apellidos;
            email.textContent = doc.correo;
            phone.textContent = doc.telefono;
            year.textContent = doc.edad;
            coment.textContent = doc.comentario;

            container.appendChild(tr);
            tr.appendChild(img);
            tr.appendChild(names);
            tr.appendChild(email);
            tr.appendChild(phone);
            tr.appendChild(year);
            tr.appendChild(coment);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });


var buscar = document.getElementById('buscar')

buscar.addEventListener("input", e => {
    document.querySelectorAll(".tbody tr").forEach(documento => {

        documento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? documento.classList.remove("filtro")
            : documento.classList.add("filtro");

    });
});