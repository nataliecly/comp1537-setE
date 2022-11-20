
// GLOBAL VARIABLES
var currentPage = 1;
var pageSize = 3

setup = function () {
  $("#search-btn").click(() => {
    $.ajax(
    {
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=e876fb3647a646e4d2e48f9eb2e4f506&language=en-US&page=1",
      type: "GET",
      success: function (data) {
        // console.log(data["results"]);
        const start_index = (currentPage - 1) * pageSize;
        const end_index = pageSize * (currentPage - 1) + pageSize;

        for (i = start_index; i < end_index; i++) {
          $("main").append(
            `
            <div>
              ${data.results[i].title}
              <p>
                ${data.results[i].overview}
              </p>
              <img 
                src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"
              >
              <button movieBackdropImageName="${data.results[i].backdrop_path}" class="backdropBtn"> BackDrop Image </button>
              <hr>
            </div>
            `
          );
        }
      },
      error: function (error) {
        console.log(error);
      }
    }
  )
  })
  
  $("#pageSizeMenu").change(() => {
    pageSize = $("#pageSizeMenu option:selected").val();
    console.log("pageSize", pageSize);
  })

  $("body").on("click", ".backdropBtn", function () {
    // console.log(`https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}`);
    $("aside").html(
      `
        <img src="https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}"> 
      `
    )
  })
}

$(document).ready(setup)