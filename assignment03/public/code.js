receivedArr = [];

function setup() {
  $("#unicornNameButton").click(function () {
    // alert("Hello, " + $("#unicornNameFromHTML").val());
    $.ajax({
      url: "http://localhost:5001/nameUnicorns",
      type: "POST",
      data: { unicornNameFromHTTPBody: $("#unicornNameFromHTML").val() },
      success: function (data) {
        console.log(data);
        receivedArr = data;
        $("#result").html(JSON.stringify(data, undefined, 2));
      },
    });
  });

  $("#showName").change(function () {
    if (this.checked) {
      // alert("checked");
      newArr = receivedArr.map((item) => {
        return item.name;
      });
      $("#result").html(JSON.stringify(newArr[0]));
    }
  });

  $("#unicornWeightButton").click(function () {
    $.ajax({
      url: "http://localhost:5001/weightUnicorns",
      type: "POST",
      data: {
        unicornLowerWeightFromHTTPBody: $("#weightLowerLimitFromHTML").val(),
        unicornUpperWeightFromHTTPBody: $("#weightUpperLimitFromHTML").val(),
      },
      success: function (data) {
        console.log(data);
        receivedArr = data;
        $("#result").html(JSON.stringify(data, undefined, 2));
      },
    });
  });

  $("#favFoodButton").click(function () {
    var array = [];
    if ($("#appleFilter").prop("checked")) {
      array.push("apple");
    }
    if ($("#carrotFilter").prop("checked")) {
      array.push("carrot");
    }
    $.ajax({
      url: "http://localhost:5001/favFoodUnicorns",
      type: "POST",
      data: {
        foods: array,
      },
      success: function (data) {
        console.log(data);
        receivedArr = data;
        $("#result").html(JSON.stringify(data, undefined, 2));
      },
    });
  });

  $("#filtersButton").change(function () {
    if ($("#nameFilter").prop("checked")) {
    }
  });
}

$(document).ready(setup);
