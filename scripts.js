let i = 0;
console.log(i);

$('#inc').click(() => {
    i++;
    console.log(i);
    $('#counter').text(i);
});