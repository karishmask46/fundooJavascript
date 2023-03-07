$(function () {
  $("#LoginForm").on("submit", function (event) {
    event.preventDefault();
    let obj = {
      email: $(".get").val(),
      password: $(".let").val()
    }
    $.ajax({
      type: "POST",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
      data: obj,
      success: function (data) {
        console.log(data);
        localStorage.setItem('token', (data.id))
        alert("sigin successfull.");
        window.location.href="/templates/dashboard/dashboard.html"
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
