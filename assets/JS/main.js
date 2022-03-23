$(document).ready(function () {
  $("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
  $(".thumbnail").hover(function () 
          {
          $(".head-img").css("display", "none");
          $("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
          $(this).children("video")[0].play();
          }, 
  function () {
      var el = $(this).children("video")[0];
      el.pause();
      $("#video").css("display", "none");
      $(".head-img").css("display", "block");
  });
});

$(document).ready(function () {
  $("#video2").css("display", "none"); //HIDE THE VIDEO INITIALLY
  $(".thumbnail2").hover(function () 
          {
          $(".head-img2").css("display", "none");
          $("#video2").css("display", "block"); //SHOW THE VIDEO ON HOVER
          $(this).children("video")[0].play();
          }, 
  function () {
      var el = $(this).children("video2")[0];
      el.pause();
      $("#video2").css("display", "none");
      $(".head-img2").css("display", "block");
  });
});
// document.readyState(function () {
//   document.getElementById("video").css("display", "none"); 
//   document.getElementByClassName("thumbnail").hover(function () 
//           {
//           document.getElementByClassName("head-img").css("display", "none");
//           document.getElementById("video").css("display", "block"); 
//           this.children("video")[0].play();
//           }, 

//   function () {
//       let el = this.children("video")[0];
//       el.pause();
//       document.getElementById("video").css("display", "none");
//       document.getElementByClassName("head-img").css("display", "block");
//   });
// });




function goRight (container) {
    document.getElementById(container).scrollLeft += 700;
};
function goLeft (container) {
    document.getElementById(container).scrollLeft -= 700;
};


window.onload = function () {
    console.log(Math.floor(Math.random() * 10));
    var NewR = document.getElementById("New")
    var Interna = document.getElementById("Inter")
    var TvShow = document.getElementById("TV")
    var Jap = document.getElementById("Japanese")
    var Internadata = ['NetflixSérie40.PNG', 'NetflixSérie41.PNG', 'NetflixSérie42.PNG', 'NetflixSérie43.PNG', 'NetflixSérie44.PNG', 'NetflixSérie45.PNG', 'NetflixSérie78.PNG', 'NetflixSérie79.PNG', 'NetflixSérie80.PNG', 'NetflixSérie81.PNG', 'NetflixSérie82.PNG', 'NetflixSérie83.PNG'];
    var Newdata = ['NetflixSérie53.PNG', 'NetflixSérie54.PNG', 'NetflixSérie55.PNG', 'NetflixSérie56.PNG', 'NetflixSérie57.PNG', 'NetflixSérie58.PNG', 'NetflixSérie72.PNG', 'NetflixSérie73.PNG', 'NetflixSérie74.PNG', 'NetflixSérie75.PNG', 'NetflixSérie76.PNG', 'NetflixSérie77.PNG'];
    var Tvdata = ['NetflixSérie28.PNG', 'NetflixSérie29.PNG', 'NetflixSérie30.PNG', 'NetflixSérie31.PNG', 'NetflixSérie32.PNG', 'NetflixSérie33.PNG','NetflixSérie67.PNG','NetflixSérie68.PNG','NetflixSérie69.PNG','NetflixSérie70.PNG','NetflixSérie71.PNG'];
    var Japdata = ['NetflixSérie34.PNG', 'NetflixSérie35.PNG', 'NetflixSérie36.PNG', 'NetflixSérie37.PNG', 'NetflixSérie38.PNG', 'NetflixSérie39.PNG','NetflixSérie61.PNG','NetflixSérie62.PNG','NetflixSérie63.PNG','NetflixSérie64.PNG','NetflixSérie65.PNG','NetflixSérie66.PNG'];
  let i= 0;
    while (i < Newdata.length) {
      i++;
      NewR.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/Images/' + Newdata[Math.floor(Math.random() * Newdata.length)] + '" class="rounded"></a></div></div>')
    }
    
    i= 0;

    while (i < Internadata.length) {
      i++;
      Interna.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/Images/' + Internadata[Math.floor(Math.random() * Internadata.length)] + '" class="rounded"></a></div></div>')
    }
    i= 0;

    while (i < Tvdata.length) {
      i++;
      TvShow.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/Images/' + Tvdata[Math.floor(Math.random() * Tvdata.length)] + '" class="rounded"></a></div></div>')
    }
    i= 0;

    while (i < Japdata.length) {
      i++;
      Jap.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/Images/' + Japdata[Math.floor(Math.random() * Japdata.length)] + '" class="rounded"></a></div></div>')
    }

    $(function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 120) {
          $("#topbar").css("backgroundColor", "#181818");
        } else if ($(window).scrollTop() > 20){
          $("#topbar").css("backgroundColor", "#181818");
        }
        else {
          $("#topbar").css("backgroundColor", "transparent");
        }
      });
    })
    
}





  
