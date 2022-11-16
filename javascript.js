const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

function abrir() {
  // document.getElementById("parent-div").classList.remove("test-class");
  document.getElementById("xv").classList.add("animate__lightSpeedInRight");

  document.getElementById("parent-div").classList.add("animate__slideOutUp");
  document.getElementById("logo").classList.remove("animate__infinite");
  document.getElementById("pulse").classList.add("hide");
  document.getElementsByTagName("body")[0].classList.remove("avoiding-scroll");
  document.getElementById("invitacion").classList.remove("hide");
  document.getElementById("name").classList.add("animate__zoomIn");
  document.getElementById("cuando").classList.add("animate__zoomIn");
  audio.play();

  window.scrollTo(0, 0);
}

// auidio

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("d-none");
    playPause.querySelector(".play-btn").classList.toggle("d-none");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("d-none");
    playPause.querySelector(".play-btn").classList.toggle("d-none");
  }
});

// a regresiva -------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2022 1:30").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="cuenta " >
  <span>${days} días</span>
  <span class="ml-2 mr-2"> : </span>  
  <span>${hours} hrs</span> 
  <span class="ml-2 mr-2"> : </span>   
  <span>${minutes} min</span>
  <span class="ml-2 mr-2"> : </span>  
  <span>${seconds} seg</span> 
    </div>
  </div>
    `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
