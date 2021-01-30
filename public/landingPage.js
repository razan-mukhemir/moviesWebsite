$(document).ready(function () {

  getMoviesList();

    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle",
        });
      });
    });
  });



function getMoviesList(){
  axios.get('http://www.omdbapi.com/?s=joker&apikey=2e5ecd3b')
  .then(response=>{
    console.log(response);
    let moviesList=response.data.Search;
    let output=''

    for(let i=0;i<10;i++){
      let number=Math.floor((Math.random()*10)+1)
      output+=`
      <div class="w-7/12 sm:w-1/4 lg:w-1/6  mx-auto sm:mr-5 mb-10  p-3 border-2 border-gray-900 border-solid text-center rounded-lg">
                    
      <img src="${moviesList[i].Poster}" class="h-56 w-10/12 mx-auto">
      <h5 class="text-white text-lg">${moviesList[i].Title}</h5>
      <button class="bg-red-800 text-white px-4 py-2 rounded">Watch Now</button>
   
  </div>
      `
    }

    $('#moviesList').html(output);

  })
  .catch((err) => {
    console.log(err);
   
  });
}