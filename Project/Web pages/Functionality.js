$(document).ready(function () {
  $(".section-header").click(function () {
    $(".section-content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });
});

document.getElementById("checker").addEventListener("click",function(){
  const theMessage = document.getElementById("message");
  theMessage.innerText = "Contact form sent!";
  theMessage.style.color = "green";
})