receivedArr = [];

function setup() {
  $("main").empty();
  $("#genderMenu").change(function () {
    // alert("Hello, " + $("#unicornNameFromHTML").val());
    $.ajax({
      url: "http://localhost:4000/nameUnicorns",
      type: "POST",
      data: { genderMenu: $("#genderMenu").val() },
      success: function (data) {
        console.log(data);
        receivedArr = data;
        result = "";
        result = `</ul>`;
        data.map((aUnicorn) => {
          console.log("aUnicorn", aUnicorn);
          for (var field in aUnicorn) {
            result += `<li>${field}: ${aUnicorn[field]}</li>`;
          }
          result += `</li>  <span><button class="showDetails">show details</button>
        </span>
        <br>`;
        });
        result += `<ul>`;
        $("#result").html(result);
      },
    });
  });
}

//   $("#showName").change(function () {
//     if (this.checked) {
//       // alert("checked");
//       newArr = receivedArr.map((item) => {
//         return item.name;
//       });
//       $("#result").html(JSON.stringify(newArr[0]));
//     }
//   });
// }

$(document).ready(setup);
