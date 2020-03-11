$(".form-btn").insertAfter("#form");

$('#table').on('click', '.btn', function() {
    $(this).closest('tr').remove();
});

$(".form-btn").click(() => {
  const name = $(".name-input").val();
  const rating = $(".rating-input").val();

  const tr = $("<tr></tr>");
  const td = $(
    "<td>" +
      name +
      "</td><td>" +
      rating +
      "</td><td>" +
      '<button onclick="removeItem()" class="btn">X</button>' +
      "</td>"
  );

  $("tbody").append(tr);
  $(tr).addClass("table-rows");
  $(td).addClass("col");
  $(tr).append(td);

  $(".name-input").val("");
  $(".rating-input").val("");
});
