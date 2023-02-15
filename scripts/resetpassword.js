$(function () {
    $("#resetform").on("submit", function (event) {
        event.preventDefault();
        let resetdata = {
            newPassword: $("#name").val(),
            confirmPassword: $("#host").val(),
            service: "advance"
        }
        $.ajax({
            type: "POST",
            url: "http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password",
            data: resetdata,
            success: function (data) {
                console.log(data);
                alert("reset password link sent successfully to your registered email.");
            },
            error: function (error) {
                console.error(error);
                alert('reset password failed, please try again');
            }
        });
    });
});
