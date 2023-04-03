$(function () {
  $("#LoginForm").on("submit", function (event) {
    event.preventDefault();
    let obj = {
      email: $(".email").val(),
      password: $(".password").val()
    }
    $.ajax({
      type: "POST",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
      data: obj,
      success: function (data) {
        console.log(data);
        openpopup();
        localStorage.setItem('token', (data.id))
      },
      error: function (error) {
        console.error(error);
        alert('signin failed, please try again');
      }
      
    });
    
  });
});
function createaccount(){
  window.location.href="/templates/Registration/register.html"
}
let popup=document.getElementById("PopUp")
function openpopup(){
popup.classList.add("open-popup")
}
function closepopup(){
  popup.classList.remove("open-popup")
  window.location.href="/templates/dashboard/dashboard.html"
}
