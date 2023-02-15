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
        alert("registration successful")
      },
      error: function (error) {
        console.error(error);
        alert('Registration failed, please try again');
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