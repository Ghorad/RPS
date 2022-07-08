var images = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];
var imageStep = 0;

$(".play-button").on("click", function() {
  $(".play-button").addClass("hidden");
  $(".selection-container").removeClass("hidden");
  delayedImages();

})

$(".select-button").on("click", function() {
  $(".selection-container").addClass("hidden");
  window.delayedImages = function() {
    return false;
  };
  randomImgChanger()
  $(".player-img").attr("src", this.children[0].getAttribute("src"));
  resultChecker()
})

function delayedImages() {
  $(".comp-img").attr("src", images[imageStep]);
  if (imageStep < 2) {
    imageStep++;
  } else {
    imageStep = 0;
  }
  setTimeout("delayedImages()", 200)
  return true;
}

function randomImgChanger() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomImage = images[randomNumber];
  $(".comp-img").attr("src", randomImage);
}

function resultChecker() {
  var playerSelection = document.querySelector(".player-img").getAttribute("src");
  var computerSelection = document.querySelector(".comp-img").getAttribute("src");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);;
  if (computerSelection == playerSelection) {
    console.log("draw");
    $(".game-result-draw").removeClass("hidden");
  }
  if (playerSelection == images[0] && computerSelection == images[1]) {
    $(".game-result-lose").removeClass("hidden");
  }
  if (playerSelection == images[1] && computerSelection == images[2]) {
    $(".game-result-lose").removeClass("hidden");
  }
  if (playerSelection == images[2] && computerSelection == images[0]) {
    $(".game-result-lose").removeClass("hidden");
  }
  if (computerSelection == images[0] && playerSelection == images[1]) {
    $(".game-result-win").removeClass("hidden");
  }
  if (computerSelection == images[1] && playerSelection == images[2]) {
    $(".game-result-win").removeClass("hidden");
  }
  if (computerSelection == images[2] && playerSelection == images[0]) {
    $(".game-result-win").removeClass("hidden");
  }
  $(".play-again").removeClass("hidden");
  window.delayedImages = function() {
    return true;
  };
}

$(".play-again").on("click", function() {
  document.location.reload();
})
