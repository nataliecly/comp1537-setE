
// GLOBAL VARIABLES
var currentPage = 1;
var pageSize;

display_page = () => {
  $("main").empty();
  $("#page-numbers").empty();
  $.ajax(
      {
        url: `https://api.themoviedb.org/3/search/movie?api_key=e876fb3647a646e4d2e48f9eb2e4f506&language=en-US&page=1&include_adult=false&query=${term}`,
        type: "GET",
        success: function (data) {
          console.log(data["results"]);
          const start_index = (Number(currentPage) - 1) * Number(pageSize);
          const end_index = Number(start_index) + Number(pageSize);
          // console.log(end_index);
          
          let pageButtons = 20 / pageSize;

          // console.log(pageButtons);
    
          for (i = 1; i < pageButtons + 1; i++) {
            $("#page-numbers").append(
              `<button> ${i} </button>`
            )
          }

          
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
                  width= 100px;
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

  // display pages based on search term
  $("#search-btn").click(() => {
    term = $("#search-term").val();
    // console.log('the entered term:', term);
    display_page()
  })

  // display pages based on page size selected in dropdown menu 
  $("#pageSizeMenu").change(() => {
    pageSize = $("#pageSizeMenu option:selected").val();
    console.log("pageSize:", pageSize);
    display_page()
  })

  // backdrop image
  $("body").on("click", ".backdropBtn", function () {
    // console.log(`https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}`);
    $("aside").html(
      `
        <img src="https://image.tmdb.org/t/p/w500/${$(this).attr('movieBackdropImageName')}"> 
      `
    )
  })

  // page number buttons
   $("#page-numbers").on("click", "button", function () {
     currentPage = Number($(this).text());
     display_page()
   })
  
  // make page buttons + first/last/next/prev buttons display on click
  
  $("#search-btn").on("click", function () {
    // console.log("clicked");
    $("#first-btn").css("display", "inline-block");
    $("#last-btn").css("display", "inline-block")
  })

    $("#page-numbers").on("click", function () {
    // console.log("clicked");
    $("#prev-btn").css("display", "inline-block")
    $("#next-btn").css("display", "inline-block")
    })
  
  // first, last, next, prev buttons function


  $("#next-btn").on("click", function () {
    if (currentPage < 20 / pageSize) {
      currentPage += 1;
    }
    display_page()
  })

  $("#prev-btn").on("click", function () {
    if (currentPage > 1) {
      currentPage -= 1;
    }
    display_page()
  })

  $("#first-btn").on("click", function () {
    currentPage = 1;
    display_page()
    })
  
  $("#last-btn").click(() => {
    currentPage = 20 / pageSize;
    display_page()
  })
}




$(document).ready(setup)