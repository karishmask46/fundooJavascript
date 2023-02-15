$(function() {
    $("#forgotform").on("submit",function (event) {
        event.preventDefault();
        let obj={
          email:$(".get").val(),
        }
            $.ajax({
                type: "POST",
                url: "http://fundoonotes.incubation.bridgelabz.com/api/user/reset",
                data: obj,
                success: function(data) {
                    console.log(data);
                    alert("set password link sent successfully to your registered email.");
                  },
                  error: function(error) {
                    console.error(error);
                    alert('reset password failed, please try again');
                  }
            });
    }); 
});
