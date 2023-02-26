
function toggleNav() {
  var nav = document.getElementById("side");
  if (nav.style.width === "250px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "250px";
  }
}
$(function () {
  $("#createnote").on("submit", function (event) {
    event.preventDefault();
    let obj = {
      title: $("#title").val(),
      description: $("#description").val()
    }
    $.ajax({
      type: "POST",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
      data: obj,
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {
        console.log(data);
        $("#title").val("");
        $("#description").val("");
      },
      error: function (error) {
        console.error(error);
      }
    });
  });
});
var arraydata = [];
$(function () {
  $.ajax({
    type: "GET",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
    dataType: 'json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (result) {
      console.log(result);
      arraydata = result.data.data
      console.log(arraydata);
      arraydata.forEach(function (item) {
        $('.getnote').append(`<div class="listnotes">
          <div class= "titlediv" >
              <div class="pushpindiv">
                  <p id="gettitle">`+ item.title + `</p>
                  <img id="pushpin" src="/assets/push_pin_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                      width="25px">
              </div>
              <div id="desc">
                  <p id="getdescription">`+ item.description + `</p>
              </div>
          </div >
          <div class="iconslist1">
            <div class="listicons1">
              <img src="/assets/add_alert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                width="25px">
                <img src="/assets/person_add_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                  width="25px">

                  <img src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">

                    <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">

                      <img  class="archive" src="/assets/archive_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">
                       
                          <div class="dropdown">
                          <img class="morebutton"  src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content">
                            <a href="#">Delete note</a>
                            <a href="#">Add label</a>
                            <a href="#">Add drawing</a>
                            <a href="#">make a copy</a>
                            <a href="#">Show checkboxes</a>
                            <a href="#">Copy to Google Docs</a>
                          </div>
                        </div> 
                        </div>
                      </div>
                    </div>`)

      })
    },
    error: function (error) {
      console.error(error);
    }
  });
  $(".listicons1").on("click",".archive",function () {
    console.log("icon clicked");
    let archiveobj = {
      noteIdList: id,
      isArchived: true,
    }
    $.ajax({
      type: "POST",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes"+id,
      data: archiveobj,
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {
        console.log(data);
        $("#title").val("");
        $("#description").val("");
      },
      error: function (error) {
        console.error(error);
      }
    });
  });
});
$(function () {
  $('#title').hide();
  $('.iconslist').hide();
  $('#description').show();
  $('#iconstitle').show();
  $('#description').on('click', function () {
    $('#title').show();
    $('.iconslist').show();
    $('#description').show();
    $('#iconstitle').hide();
  })
  $('#closebutton').on('click', function () {
    $('#title').hide();
    $('.iconslist').hide();
    $('#description').show();
    $('#iconstitle').show();
  })
});
$(function () {

})
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


