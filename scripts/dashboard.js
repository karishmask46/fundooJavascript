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
var arrayData = [];
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
    dataType: 'json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (result) {
      console.log(result);
      arrayData = result.data.data
      console.log(arrayData);
      arrayData.forEach(function (item) {
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

                  <img id="colorpalette" src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">

                    <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">
                        <div>
                      <img  id="${item}"  src="/assets/archive_FILL0_wght400_GRAD0_opsz48.svg" alt="" onclick="setArchive(this)" height="25px" width="25px">
                       </div>
                          <div class="dropdown">
                          <img class="morebutton"  src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content">
                            <a href="#" id="deletenote">Delete note</a>
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

});
function setArchive(noteitem) {
  let noteid=$(noteitem).attr('id')
  console.log("icon clicked");
  console.log(noteid);
  let archiveobj = {
    noteIdList: noteid.id,
    isArchived: true
  }
  console.log(archiveobj);
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
    data: archiveobj,
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error(error);
    }
  });
}


$(".dropdown-content").on("click", "#deletenote", function () {
  var deletedata = arrayData
  let deleteobj = {
    noteIdList: [deletedata.id],
    isDeleted: true,
  }
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
    data: deleteobj,
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error(error);
    }
  });
})



$(".listicons1").on("click", "#colorpalette", function () {
  colorarray = [{ Colorcode: "#f28b82" },
  { Colorcode: "#fbbc04" },
  { Colorcode: "#fff475" },
  { Colorcode: "#ccff90" },
  { Colorcode: "#a7ffeb" },
  { Colorcode: "#cbf0f8" },
  { Colorcode: "#aecbfa" },
  { Colorcode: "#d7aefb" },
  { Colorcode: "#fdcfe8" },
  { Colorcode: "#e6c9a8" },
  { Colorcode: "#e8eaed" },
  { Colorcode: "white" }];
  colorarray.forEach(function (coloritem) {
    $(".colorbox").append(`<div class="colour">
    <div class="colorBox">
        <button class="colors">`+ coloritem.Colorcode + `</button>
    </div>
</div>`)
  })
})

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
function toggleNav() {
  var nav = document.getElementById("side");
  if (nav.style.width === "250px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "250px";
  }
}

