$(window).scroll(function () {
    var windowScrollPosition = $(window).scrollTop();
    var stikyDiv = $('#stikyDiv').position();
    if(windowScrollPosition>=stikyDiv.top){
        $('#stikyDiv').css({
            'position': 'fixed',
            'top': '0px'
        });
    } else {
        $('#stikyDiv').css({
            'position': 'relative',
            'top': '0px'
        });
    }
});




// $(window).scroll(function () {
//     var windowScrollPosition = $(window).scrollTop();
//     $('#h3').text(windowScrollPosition);
//     var helloDiv = $('#stikyDiv').position();
//     $('#h4').text(helloDiv.top);
// });


// var scrollDivPosition = $('#scrollDiv').position();

// var firstScrollPosition =0;

// $('#scrollDiv').scroll(function () {
//     var scrollPosition = $('#scrollDiv').scrollTop();
//     if(scrollPosition> firstScrollPosition) {
//         $ ('#h2').text('You are scrolling down');
//     }else {
//         $('#h2').text('You are scrolling up');
//     }
//     firstScrollPosition=scrollPosition;
// });

// $('#scrollDiv').scroll(function () {
//     var scrollPosition = $('#scrollDiv').scrollTop();
//     $('#h2').text(scrollPosition);
// });

// $('#scrollDiv').scroll(function () {
//     $('h2').css('display','block').fadeOut(2000);
// });



// $ ('#firstName').keyup(function () {
//     var firstName = $('#firstName').val();
//     $('#res1').text(firstName);
// });
// $ ('#lastName').keyup(function () {
//     var lastName = $('#lastName').val();
//     $('#res2').text(lastName);
// });
//
// $('#lastName').blur(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+lastName;
//     $('#res3').text(fullName);
// });


// $('#btn').click(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var fullName = firstName+' '+lastName;
//     $('#fullName').val(fullName);
// });


