// DOM
const contenedorTendencias = document.getElementById('contenedor-tendencias');


fetch(`https://api.giphy.com/v1/gifs/trending?api_key=qDG7dj9PhfFnB8h92ep2uoEtZAqyRZgB&limit=10&rating=g`)
.then(res => res.json())
.then(tarjetas => {
    console.log(tarjetas);
    for(let tarjeta of tarjetas.data){

        let divTarjeta = document.createElement('div');
        divTarjeta.classList.add('tarjeta');

        let imgGif = document.createElement('img');
        imgGif.classList.add('imgTarjeta');
        imgGif.setAttribute('src', tarjeta.images.original.url);
        imgGif.setAttribute('alt', tarjeta.title);
        divTarjeta.appendChild(imgGif);

        let divTags = document.createElement('div');
        divTags.classList.add('contenedor-tag');
        divTags.innerHTML = `<p>${tarjeta.title}</p>`;
        divTarjeta.appendChild(divTags);

        contenedorTendencias.appendChild(divTarjeta);
    }
})

