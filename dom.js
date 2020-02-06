$('.button').click(function() {
    console.log('A button was clicked');
});

$('.table-btn').insertAfter('#form');

$('.table-btn').click(() => {
    //insert input value into new place
    const name = $('.name-input').val();
    const rating = $('.rating-input').val();

    let newName = $('td').text(name);
    // let newRating = $('td').text(rating);
    

    $('table').append(newName);
    // $('table').append(newRating);
    $('.name-input').val('');
    $('.rating-input').val('');

});