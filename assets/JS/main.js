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
  $("#vid2").css("display", "none"); //HIDE THE VIDEO INITIALLY
  $(".MyLL").hover(function () 
          {
          $(".head-img2").css("display", "none");
          $("#vid2").css("display", "block"); //SHOW THE VIDEO ON HOVER
          $(this).children("video")[0].play();
          }, 
  function () {
      var el = $(this).children("video")[0];
      el.pause();
      $("#vid2").css("display", "none");
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
    var Internadata = ['NetflixS??rie40.PNG', 'NetflixS??rie41.PNG', 'NetflixS??rie42.PNG', 'NetflixS??rie43.PNG', 'NetflixS??rie44.PNG', 'NetflixS??rie45.PNG', 'NetflixS??rie78.PNG', 'NetflixS??rie79.PNG', 'NetflixS??rie80.PNG', 'NetflixS??rie81.PNG', 'NetflixS??rie82.PNG', 'NetflixS??rie83.PNG'];
    var Newdata = ['NetflixS??rie53.PNG', 'NetflixS??rie54.PNG', 'NetflixS??rie55.PNG', 'NetflixS??rie56.PNG', 'NetflixS??rie57.PNG', 'NetflixS??rie58.PNG', 'NetflixS??rie72.PNG', 'NetflixS??rie73.PNG', 'NetflixS??rie74.PNG', 'NetflixS??rie75.PNG', 'NetflixS??rie76.PNG', 'NetflixS??rie77.PNG'];
    var Tvdata = ['NetflixS??rie28.PNG', 'NetflixS??rie29.PNG', 'NetflixS??rie30.PNG', 'NetflixS??rie31.PNG', 'NetflixS??rie32.PNG', 'NetflixS??rie33.PNG','NetflixS??rie67.PNG','NetflixS??rie68.PNG','NetflixS??rie69.PNG','NetflixS??rie70.PNG','NetflixS??rie71.PNG'];
    var Japdata = ['NetflixS??rie34.PNG', 'NetflixS??rie35.PNG', 'NetflixS??rie36.PNG', 'NetflixS??rie37.PNG', 'NetflixS??rie38.PNG', 'NetflixS??rie39.PNG','NetflixS??rie61.PNG','NetflixS??rie62.PNG','NetflixS??rie63.PNG','NetflixS??rie64.PNG','NetflixS??rie65.PNG','NetflixS??rie66.PNG'];
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





  
