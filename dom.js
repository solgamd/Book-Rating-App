$(".button").click(function() {
  console.log("A button was clicked");
});

$(".table-btn").insertAfter("#form");

function removeItem(tr) {
    $("tbody").remove(tr);
}

$(".table-btn").click(() => {
  const name = $(".name-input").val();
  const rating = $(".rating-input").val();

  let tr = $("<tr></tr>");
  let td = $('<td>'+name+'</td><td>'+rating+'</td><td>'+'<button onclick="removeItem()">X</button>'+'</td>')

  $("tbody").append(tr);
  $(tr).addClass("table-rows");
  $(td).addClass("col");
  $(tr).append(td);

  

  // $(newName).append(`<td> + ${newRating} + </td>`);
  // $('table').append(newRating);
  $(".name-input").val("");
  $(".rating-input").val("");
});
