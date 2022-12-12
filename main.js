// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const notDisplayDiv = document.getElementById("modal")
modal.className = "hidden"
  notDisplayDiv.style.display = "none"
const likeheart = document.getElementsByClassName("like-glyph")
function likerEvent(event){
  const likes = event.target
  mimicServerCall()
  .then((response)=> {
    alert("action in progress")
    alert(response)
    likes.EMPTY_HEART.COLOR="activated"
    likes.FULL_HEART.color=" "
    .catch (()=>function (notResponding){
      document.getElementById("modal").classList.remove("hidden")
      setTimeout(functions())
      document.getElementById("modal").classList.add("hidden")
    })
  })
}
