
// GLOBAL VARIABLES
var currentPage = 1;
var pageSize;
var term;

display_page = () => {
  $("main").empty();
  $("#page-buttons").empty();
  $.ajax(
      {
        url: `https://api.themoviedb.org/3/search/movie?api_key=e876fb3647a646e4d2e48f9eb2e4f506&language=en-US&page=1&include_adult=false&query=${term}`,
        type: "GET",
        success: function (data) {
          console.log(data["results"]);
          const start_index = (Number(currentPage) - 1) * Number(pageSize);
          const end_index = Number(start_index) + Number(pageSize);

          let buttons = 20 / pageSize;

          console.log(buttons);
          console.log(end_index);

          for (i = 1; i < buttons + 1; i++) {
            $("#page-buttons").append(
              `<button> ${i} </button>`
            )
          }

          // $("main").empty();
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
}

setup = function () {
  pageSize = $("#pageSizeMenu option:selected").val();
  $("#search-btn").click(() => {
    term = $("#search-term").val();
    // console.log('the entered term:', term);
    display_page()
  })
  
  $("#pageSizeMenu").change(() => {
    pageSize = $("#pageSizeMenu option:selected").val();
    console.log("pageSize:", pageSize);
    display_page()
  })

  $("body").on("click", ".backdropBtn", function () {
    // console.log(`https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}`);
    $("aside").html(
      `
        <img src="https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}"> 
      `
    )
  })

   $("#page-buttons").on("click", "button", function () {
     currentPage = $(this).text();
     display_page()
    })
  }

  // $("#next-btn").click(() => {
  //   currentPage += 1;
  //   display_page()
  // })

  // $("#prev-btn").click(() => {
  //   currentPage -= 1;
  //   display_page()
  // })

$(document).ready(setup)