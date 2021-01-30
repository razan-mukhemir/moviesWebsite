$(document).ready(function(){
    $('#searchMovieForm').submit(function(e){
        let searchInput = $('#searchInput').val();
        getMovies(searchInput);
        e.preventDefault();
    })
  
})

function getMovies(searchInput){
    axios.get('http://www.omdbapi.com/?s='+searchInput+'&apikey=2e5ecd3b')
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let found=response.data.Response
        let output = '';

        if(found==='True'){
            $.each(movies, (index, movie) => {
                output += `
                  <div class=" w-7/12 sm:w-1/4 lg:w-1/6  mx-auto sm:mr-5 mb-10 bg-gray-800 p-3 text-center rounded-lg">
                    
                      <img src="${movie.Poster}" class="h-56 w-10/12 mx-auto">
                      <h5 class="text-white text-lg">${movie.Title}</h5>
                      <button class="bg-red-800 text-white px-4 py-2 rounded">Watch Now</button>
                   
                  </div>
                `;
              });
        }

        else {
            output+=`
            <div class='w-full mt-20'>
                <img src="img/noResult.png" class="h-56 w-1/4 mx-auto">
                <h2 class='text-gray-400 text-center text-2xl text-bold ml-20'>The Movie is not Found</h2>
            </div>
            `
           
        }
       
  
        $('#moviesContainer').html(output);
      })
      .catch((err) => {
        console.log(err);
       
      });
  }