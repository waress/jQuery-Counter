let i = 0;

$('#inc').click(() => {
    i++;
    $('#counter').text(i);
});

$('#dec').click(() => {
    i--;
    $('#counter').text(i);
});