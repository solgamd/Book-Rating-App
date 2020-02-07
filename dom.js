$('.button').click(function() {
    console.log('A button was clicked');
});

$('.table-btn').insertAfter('#form');

$('.table-btn').click(() => {
    const name = $('.name-input').val();
    const rating = $('.rating-input').val();

    let tr = $('<tr></tr>');
    let td = $('<td>'+name+'</td><td>'+rating+'</td><td>'+'X'+'</td>')
   
    $('table').append(tr);
    $(tr).addClass('table-rows')
    $(tr).append(td);
    // $(newName).append(`<td> + ${newRating} + </td>`);
    // $('table').append(newRating);
    $('.name-input').val('');
    $('.rating-input').val('');

});