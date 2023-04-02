const contenedor = document.getElementById (`main2`)

const movies = []
calendario = data.fechaActual
let template = ``

 for (fecha of data.eventos){
      if (fecha.date < calendario){
        movies.push(fecha)
       }
 }
for (let movie of movies){
    
    template += articulo (movie)
}
contenedor.innerHTML = template


            function articulo (movie) {
                return `<div class="card" style="width: 20rem;">
                <img class = "card-img-top" src="${movie.image}" alt="museo">
                <div class="card-body">
                    <h5 class="card-title">${movie.name}</h5>
                    <p class="card-text">${movie.description}</p>
                    <div class="d-flex justify-content-lg-between">Price : ${movie.price}</p><a href="../pages/datails.html" class="btn btn-primary">Details</a></div>
                </div>
                </div>`}