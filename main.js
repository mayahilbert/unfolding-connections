//const hasVisited = localStorage.getItem('hasVisited');



function setupVideo() {
    //if (!hasVisited) {

    //    // get video
    //    var video = document.getElementById('myVideo')
    //    // Play the video, this is optional
    //    video.play();
    //    // Add a listener to this video, so that when the video ends, the video is "hidden".
    //}
}

document.addEventListener('DOMContentLoaded', e => {
    //var video = document.getElementById("myVideo");
    //var video2 = document.getElementById("myVideo2");
    var main = document.getElementById("main-wrapper");
    //if (!hasVisited) {

    //if (video != null) {
    //    video.addEventListener('click', e => {
    //        video.style.display = "none";
    //        video2.style.display = "block";
    //        video2.play();

    //        //video.style.opacity = "0";
    //        //setTimeout(() => {
    //        //    video.style.display = "none";
    //        //}, 250);
    //        setTimeout(() => {
    //            video2.style.opacity = "0";
    //            setTimeout(() => {
    //                video2.style.display = "none";
    //            }, 250); main.classList.add("loaded");

    //        }, 1000);

    //    });
    //}
    //} else {
    //video.style.display = "none";
    //video2.style.display = "none";
    main.classList.add("loaded");
    //}
});

//localStorage.setItem('hasVisited', true)

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}