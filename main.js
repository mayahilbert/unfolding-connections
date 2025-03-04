//const hasVisited = localStorage.getItem('hasVisited');


var i = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var boo = false;
var title1 = 'Joyce Yu-';
var title2 = 'Jean Lee:';
var title3 = 'Unfold';
var title4 = 'ing Conn';
var title5 = 'ections';

var speed = 70;
var speedFast = 30; /* The speed/duration of the effect in milliseconds */
//function typeAnimation(word, id) {
//    console.log(word)
//    if (word === undefined || id === undefined) return false;
//    if (i < word.length) {
//        document.getElementById(id).innerHTML += word.charAt(i);
//        i++;
//        setTimeout(typeAnimation, speed);
//    }
//}
function unwriteExhibitionTitle() {
    //document.getElementById("joyce-yu").style.textAlign = "right";
    ////document.getElementById("jean-lee").style.textAlign = "right";
    ////document.getElementById("unfold").style.textAlign = "right";
    ////document.getElementById("ing-conn").style.textAlign = "right";
    ////document.getElementById("ections").style.textAlign = "right";
    //if (i > 0) {
    //    document.getElementById("joyce-yu").innerHTML = document.getElementById("joyce-yu").innerText.slice(1);
    //    i--;
    //    setTimeout(unwriteExhibitionTitle, speedFast);
    //} else if (i == 0 && i2 > 0) {
    //    document.getElementById("jean-lee").innerHTML = document.getElementById("jean-lee").innerText.slice(1);
    //    i2--;
    //    setTimeout(unwriteExhibitionTitle, speedFast);
    //}
    //else if (i2 == 0 && i3 > 0) {
    //    document.getElementById("unfold").innerHTML = document.getElementById("unfold").innerText.slice(1);
    //    i3--;
    //    setTimeout(unwriteExhibitionTitle, speedFast);


    //} else if (i3 == 0 && i4 > 0) {
    //    document.getElementById("ing-conn").innerHTML = document.getElementById("ing-conn").innerText.slice(1);
    //    i4--
    //    setTimeout(unwriteExhibitionTitle, speedFast);

    //} else
    //    if (i4 == 0 && i5 > 0) {
    //        document.getElementById("ections").innerHTML = document.getElementById("ections").innerText.slice(1);
    //        i5--;
    //        setTimeout(unwriteExhibitionTitle, speedFast);
    //    }

    //    else if (i5 == 0) {
    //        setTimeout(function () {
    //            writeExhibitionTitle()
    //        }, 500);
    //    }
    if (i5 > 0) {
        document.getElementById("ections").innerHTML = document.getElementById("ections").innerText.slice(0, -1);
        i5--;
        setTimeout(unwriteExhibitionTitle, speedFast);
    } else if (i5 == 0 && i4 > 0) {
        document.getElementById("ing-conn").innerHTML = document.getElementById("ing-conn").innerText.slice(0, -1);
        i4--
        setTimeout(unwriteExhibitionTitle, speedFast);
    } else if (i4 == 0 && i3 > 0) {
        document.getElementById("unfold").innerHTML = document.getElementById("unfold").innerText.slice(0, -1);
        i3--;
        setTimeout(unwriteExhibitionTitle, speedFast);
    } else
        if (i3 == 0 && i2 > 0) {
            document.getElementById("jean-lee").innerHTML = document.getElementById("jean-lee").innerText.slice(0, -1);
            i2--;
            setTimeout(unwriteExhibitionTitle, speedFast);
        } else if (i2 == 0 && i > 0) {
            document.getElementById("joyce-yu").innerHTML = document.getElementById("joyce-yu").innerText.slice(0, -1);
            i--;
            setTimeout(unwriteExhibitionTitle, speedFast);
        } else if (i == 0) {
            setTimeout(function () {
                writeExhibitionTitle()
            }, 500);
        }

}
function writeExhibitionTitle() {

    if (i < title1.length) {
        document.getElementById("joyce-yu").innerHTML += title1.charAt(i);
        i++;
        setTimeout(writeExhibitionTitle, speed);
    }
    else if (i == title1.length && i2 < title2.length) {
        document.getElementById("jean-lee").innerHTML += title2.charAt(i2);
        i2++;
        setTimeout(writeExhibitionTitle, speed);
    }
    else if (i2 == title2.length && i3 < title3.length) {
        document.getElementById("unfold").innerHTML += title3.charAt(i3);
        i3++;
        setTimeout(writeExhibitionTitle, speed);
    } else if (i3 == title3.length && i4 < title4.length) {
        document.getElementById("ing-conn").innerHTML += title4.charAt(i4);
        i4++;
        setTimeout(writeExhibitionTitle, speed);
    } else if (i4 == title4.length && i5 < title5.length) {
        document.getElementById("ections").innerHTML += title5.charAt(i5);
        i5++;
        setTimeout(writeExhibitionTitle, speed);
    } else if (i5 == title5.length) {
        setTimeout(function () {
            unwriteExhibitionTitle()


        }, 4000);
    }
}


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
    if (document.getElementById("homepage")) {
        setTimeout(writeExhibitionTitle, 1500);
    }

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
