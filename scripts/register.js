$(function () {
  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();
    let obj = {
      firstName: $("#let").val(),
      lastName: $("#host").val(),
      email: $("#name").val(),
      password: $("#password").val(),
      ConfirmPassword: $("#pass").val(),
      service: "advance"
    }
    $.ajax({
      type: "POST",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      data: obj,
      success: function (data) {
        console.log(data);
        console.log("Form submitted successfully.");
      },
      error: function (error) {
        console.error(error);
      }
    });
  });
  $("#showPassword").on("click", function () {
    if ($("#showPassword").is(":checked")) {
      $("#password").attr("type", "text");
      $("#pass").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
      $("#pass").attr("type", "password");
    }
  });
});
function signin(){
  window.location.href="/templates/login/login.html"
}
let popup=document.getElementById("PopUp")
function openpopup(){
popup.classList.add("open-popup")
}
function closepopup(){
  popup.classList.remove("open-popup")
  window.location.href="/templates/login/login.html"
}
