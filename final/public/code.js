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
        $("#result").html(JSON.stringify(data, undefined, 2));
      },
    });
  });

  // $("#genderMenu").change(function () {
  //   // alert("Hello, " + $("#genderMenu").val());
  //   $.ajax({
  //     url: "http://localhost:4000/nameUnicorns",
  //     type: "POST",
  //     data: { unicornNameFromHTTPBody: $("#unicornNameFromHTML").val() },
  //     success: function (data) {
  //       console.log(data);
  //       receivedArr = data;
  //       // let list = document.getElementById("myList");
  //       // receivedArr.forEach((item) => {
  //       //   let li = document.createElement("li");
  //       //   li.innerText = item.name;
  //       //   list.appendChild(li);
  //       // })
  //       $("#result").html(JSON.stringify(data, undefined, 2));
  //     },
  //   });
  // });

  $("#showName").change(function () {
    if (this.checked) {
      // alert("checked");
      newArr = receivedArr.map((item) => {
        return item.name;
      });
      $("#result").html(JSON.stringify(newArr[0]));
    }
  });
}

$(document).ready(setup);
