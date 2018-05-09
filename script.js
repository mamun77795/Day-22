

$ ('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#res1').text(firstName);
});
$ ('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#res2').text(lastName);
});

$('#lastName').blur(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#res3').text(fullName);
});

// $('#btn').click(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+lastName;
//     $('#fullName').val(fullName);
// });
