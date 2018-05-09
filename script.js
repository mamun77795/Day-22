$ ('.heading').click(function(){
    $ ('.heading').css({
        'color': 'red',
        'font-size': '100px',
        'background-color': 'green',
    });
});



var imageData = ['image/img1.jpg', 'image/img2.jpg', 'image/img3.jpg', 'image/img4.jpg'];
var index = 0;
function changeImage () {
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src', imageData[index]);
    index++;
    if (index >= imageData.length) {
        index = 0;
    }
}

setInterval(changeImage, 1000);



var img1 = document.getElementById ('img1');
img1.onclick = function () {
    var img1 = document.getElementById('img1').getAttribute('src');
    document.getElementById ('mainImage').setAttribute('src', img1)
};

var img2 = document.getElementById ('img2');
img2.onclick = function () {
    var img2 = document.getElementById('img2').getAttribute('src');
    document.getElementById ('mainImage').setAttribute('src', img2)
};

var img3 = document.getElementById ('img3');
img3.onclick = function () {
    var img3 = document.getElementById('img3').getAttribute('src');
    document.getElementById ('mainImage').setAttribute('src', img3)
};

var img4 = document.getElementById ('img4');
img4.onclick = function () {
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById ('mainImage').setAttribute('src', img4)
};




function timeLive () {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    document.getElementById('watch').innerHTML = hours+ ':' +minutes + ':' + seconds;
}

setInterval(timeLive, 1000);







