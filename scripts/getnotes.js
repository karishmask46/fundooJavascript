var arraydata = [];
$(function () {
  $("#createnote").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
      dataType: 'json',
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (result) {
        console.log(result);
        arraydata = result.data.data
        console.log(arraydata);
        $.each(arraydata,function(index, item){
          var items = $(' .titlediv > .pushpindiv > #gettitle').text(item.title);
          var element = $(' .listnotes > .titlediv > #desc').text(item.description);
          $("#page1").load("page1.html");
        })
        // arraydata.forEach(function (item) {
        //   var items = $(' .titlediv > .pushpindiv > #gettitle').text(item.title);
        //   var element = $(' .listnotes > .titlediv > #desc').text(item.description);
        // })
      },
      error: function (error) {
        console.error(error);
      }
    });

  });
});