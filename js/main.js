const dice = document.getElementsByClassName("dice")[0];
const advice = document.querySelector("blockquote");
const id = document.getElementById('id');
let api_response = null;

dice.addEventListener("click", function () {
  $.ajax({
    url: "https://api.adviceslip.com/advice",
    dataType: "json",
    type: "get",
    success: function (response) {
        api_response= response.slip;
        id.innerHTML= api_response.id;
        advice.innerHTML= api_response.advice;
    },
  });
});
