$('#char-form').submit(function (evt) {
    evt.preventDefault();
    let name = $('#name').val();
    let showname = $('#showname').val();
    let gender = $('#gender').val();
    let emotes = $('#emotes').val();

    $('#result').html("[Options]<br>name = "+name+"<br>showname = "+showname+"<br>side = wit<br>gender = "+gender+"<br>");
    $('#result').append("<br>[Emotions]<br>number = "+emotes+"<br>");

    for (i = 1; i <= emotes; i++) {
        $('#result').append(i+" = #-#"+i+"#0<br>");
    }
})