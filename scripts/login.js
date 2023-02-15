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
        alert("sigin successfull.");
      },
      error: function (error) {
        console.error(error);
        alert('signin failed, please try again');
      }
      
    });
    localStorage.setItem('token', JSON.stringify(obj.email))
    window.location.replace('http://127.0.0.1:5500/templates/dashboard/dashboard.html')
  });
});

