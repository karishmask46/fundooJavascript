var arrayData = [];
var filterArray = [];
var labeltext = [];


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
        window.location.reload();
      },
      error: function (error) {
        console.error(error);
      }
    });

  });
});



$(function () {
  $.ajax({
    type: "GET",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
    dataType: 'json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (result) {
      console.log(result);
      arrayData = result.data.data
      filterArray = result.data.data
      arrayData = arrayData.filter((k) => {
        return k.isArchived == false && k.isDeleted == false;
      })

      console.log(arrayData);
      arrayData.forEach(function (item) {
        localStorage.setItem('userid', item.userId)
        $('.getnote').append(`<div class="listnotes" style="background-color:${item.color} ;">
          <div class= "titlediv" id="${item.title}" title="${item.description}" value="${item.id}"  style="background-color:${item.color} ;" onclick="openPopUp(this)" >
              <div class="pushpindiv">
                  <p class="gettitle" id="titleId">`+ item.title + `</p>

                  <img id="pushpin" src="/assets/push_pin_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                      width="25px">
              </div>
              <div id="desc">
                  <p class="getdescription" id="descId">`+ item.description + `</p>
              </div>
          </div >
          <div class="iconslist1">
            <div class="listicons1">
              <img src="/assets/add_alert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                width="25px">
                <img src="/assets/person_add_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                  width="25px">

                  <div class="dropdown1" >
                          <img id="colorpallete" src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content1">
                            <a href="#" class="list1" style="background-color:#fff475 ;" id="${item.id}" title="${'#fff475'}" onclick="colorapi(this)" ></a>
                            <a href="#" class="list2" style="background-color:#ccff90 ;" id="${item.id}" title="${'#ccff90'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list3" style="background-color:#a7ffeb ;" id="${item.id}" title="${'#a7ffeb'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list4" style="background-color:#cbf0f8 ;" id="${item.id}" title="${'#cbf0f8'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list5" style="background-color:#aecbfa ;" id="${item.id}" title="${'#aecbfa'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list6" style="background-color:#d7aefb ;" id="${item.id}" title="${'#d7aefb'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list7" style="background-color:e8eaed ;" id="${item.id}" title="${'e8eaed'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list8" style="background-color:#fdcfe8;" id="${item.id}" title="${'#fdcfe8'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list9" style="background-color:#e6c9a8 ;" id="${item.id}" title="${'#e6c9a8'}" onclick="colorapi(this)"></a>
                          </div>
                        </div> 

                    <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">
                        <div>
                      <img  id="${item.id}"  src="/assets/archive_FILL0_wght400_GRAD0_opsz48.svg" alt="" onclick="setArchive(this)" height="25px" width="25px">
                       </div>
                          <div class="dropdown">
                          <img class="morebutton"  src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content">
                            <a href="#" id="${item.id}" onclick="deletenote(this)" >Delete note</a>
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
      $('#searchid').on("keyup", function () {
        var query = $('#searchid').val();
        // arrayData = arrayData.filter((k) => {
        //   return k.isArchived == false && k.isDeleted == false;
        // })
        console.log(query);
        var filteredNotes = filterArray.filter(function (note) {
          return note.title.indexOf(query) > -1 || note.description.indexOf(query) > -1
        });
        console.log(filteredNotes);
        $('.getnote').empty();
        $.each(filteredNotes, function (key, value) {
          $('.getnote').append(`<div class="listnotes" style="background-color:${value.color} ;">
          <div class= "titlediv" id="${value.title}" title="${value.description}" value="${value.id}"  style="background-color:${value.color} ;" onclick="openPopUp(this)" >
              <div class="pushpindiv">
                  <p class="gettitle" id="titleId">`+ value.title + `</p>

                  <img id="pushpin" src="/assets/push_pin_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                      width="25px">
              </div>
              <div id="desc">
                  <p class="getdescription" id="descId">`+ value.description + `</p>
              </div>
          </div >
          <div class="iconslist1">
            <div class="listicons1">
              <img src="/assets/add_alert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                width="25px">
                <img src="/assets/person_add_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                  width="25px">

                  <div class="dropdown1" >
                          <img id="colorpallete" src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content1">
                            <a href="#" class="list1" style="background-color:#fff475 ;" id="${value.id}" title="${'#fff475'}" onclick="colorapi(this)" ></a>
                            <a href="#" class="list2" style="background-color:#ccff90 ;" id="${value.id}" title="${'#ccff90'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list3" style="background-color:#a7ffeb ;" id="${value.id}" title="${'#a7ffeb'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list4" style="background-color:#cbf0f8 ;" id="${value.id}" title="${'#cbf0f8'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list5" style="background-color:#aecbfa ;" id="${value.id}" title="${'#aecbfa'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list6" style="background-color:#d7aefb ;" id="${value.id}" title="${'#d7aefb'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list7" style="background-color:e8eaed ;" id="${value.id}" title="${'e8eaed'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list8" style="background-color:#fdcfe8;" id="${value.id}" title="${'#fdcfe8'}" onclick="colorapi(this)"></a>
                            <a href="#" class="list9" style="background-color:#e6c9a8 ;" id="${value.id}" title="${'#e6c9a8'}" onclick="colorapi(this)"></a>
                          </div>
                        </div> 

                    <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">
                        <div>
                      <img  id="${value.id}"  src="/assets/archive_FILL0_wght400_GRAD0_opsz48.svg" alt="" onclick="setArchive(this)" height="25px" width="25px">
                       </div>
                          <div class="dropdown">
                          <img class="morebutton"  src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content">
                            <a href="#" id="${value.id}" onclick="deletenote(this)" >Delete note</a>
                            <a href="#">Add label</a>
                            <a href="#">Add drawing</a>
                            <a href="#">make a copy</a>
                            <a href="#">Show checkboxes</a>
                            <a href="#">Copy to Google Docs</a>
                          </div>
                        </div> 
                        </div>
                      </div>
                    </div>`);

        });

      });
    },
    error: function (error) {
      console.error(error);
    }
  });
});

function search() {

}


function setArchive(noteitem) {
  console.log(noteitem);
  let noteid = $(noteitem).attr('id')
  console.log("icon clicked");
  console.log(noteid);
  let archiveobj = {
    noteIdList: [noteid],
    isArchived: true,
  }
  console.log(archiveobj);
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
    data: JSON.stringify(archiveobj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
      window.location.reload();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function deletenote(deleteparam) {
  console.log(deleteparam);
  let deleteid = $(deleteparam).attr('id')
  let deleteobj = {
    noteIdList: [deleteid],
    isDeleted: true,
  }
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
    data: deleteobj,
    data: JSON.stringify(deleteobj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
      window.location.reload();
    },
    error: function (error) {
      console.error(error);
    }
  });

}






function openPopUp(element) {
  var id = $(element).attr('value')
  console.log(id);
  $("#methods").dialog({
    maxWidth: 570,
    maxHeight: 200,
    width: 570,
    height: 200,
    modal: true,
    draggable: true,
    resizable: true,
    closeOnEscape: false,
    open: function () {
      $(".ui-widget-overlay").on("click", function () {
        $("#methods").dialog('close');
        $(".ui-dialog-titlebar").empty("");
        $(".update").empty("");
      })
      $(".ui-dialog-content").append(`<div class="update" id="updatecolor">
      <div class="inputfileds">
      <input type="text" class="updatetitle" id="text">
                  <input type="text" class="updatedesc" id="desctext">
                  </div>
                  <div class="iconslistupdate">
                            <div class="listiconsupdate">
                                <img src="/assets/add_alert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                <img src="/assets/person_add_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                    <img  id="colorpalleteupdate" src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">

                                <img src="/assets/archive_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                <img src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                            </div>
                            <div>
                                <button class="close" id="${id}"  type="submit" onclick="updatenote(this)" >Close</button>
                            </div>
                        </div>
                  </div>`)

    }
  });
  document.getElementById("updatecolor").css = element.style
  document.getElementById("text").value = element.id
  document.getElementById("desctext").value = element.title

}

function updatenote(element) {
  var title = document.getElementById("text").value;
  var desc = document.getElementById("desctext").value;
  console.log(title);
  console.log(desc);
  var id = $(element).attr('id')
  console.log(id);
  let updateObj = {
    noteId: id,
    title: title,
    description: desc,
  }
  console.log(updateObj);
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
    data: JSON.stringify(updateObj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);

      window.location.reload()
    },
    error: function (error) {
      console.error(error);
    }
  });
  document.getElementById("titleId").value = title
  document.getElementById("descId").value = desc
}

function colorapi(noteitem) {
  console.log(noteitem.id, noteitem.title);
  let colorObj = {
    noteIdList: [noteitem.id],
    color: noteitem.title
  }
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
    data: JSON.stringify(colorObj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
      window.location.reload();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function editlabel() {
  $("#editlabel").dialog({
    maxWidth: 300,
    maxHeight: 300,
    width: 300,
    height: 300,
    modal: true,
    draggable: true,
    resizable: true,
    closeOnEscape: false,
    open: function () {
      $(".ui-widget-overlay").on("click", function () {
        $("#editlabel").dialog('close');
        $(".ui-dialog-titlebar").empty("");
        $(".titleeditlabel").empty("");
        $(".contenteditlabel").empty("");
        $(".buttondone").empty("");
        $(".createdlabel").empty("");
      })
    }
  })
  $("#Donebutton").on("click", function () {
    var inputtext = $("#inputeditlabel").val();
    var userid = localStorage.getItem('userid')
    console.log(inputtext);
    let editObj = {
      "label": inputtext,
      "isDeleted": false,
      "userId": userid,
    }

    $.ajax({
      type: "POST",
      url: "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels",
      data: JSON.stringify(editObj),
      contentType: 'application/json',
      headers: { "Authorization": localStorage.getItem('token') },
      success: function (data) {
        console.log(data);
        window.location.reload();
      },
      error: function (error) {
        console.error(error);
      }

    });
  })

}

$(function () {
  $.ajax({
    type: "GET",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/getNoteLabelList",
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
      labeltext = data.data.details
      console.log(labeltext);

      $.each(labeltext, function (key, value) {
        $(".sidenavlabel").append(`<div class="sidenaviconslbel" id="sidenavicon" tabindex=3>
        <img id="sidenavimg3" src="/assets/label_FILL0_wght400_GRAD0_opsz48.svg" height="30px" width="30px"
            alt="">
        <label id="sidenavelabel" for="">`+ value.label + `</label>
    </div>`)
        $("#getlabellist").append(`<div class="updatedlabel"><img src="/assets/label.svg"  class="original-icon"   alt="" height="20px"
    width="20px"> <img src="/assets/trash--v1.png" class="new-icon" alt="" height="20px" width="20px" id="${value.id}" onclick="deleteLabel(this)"> 
    <div class="icon-wrapper">
    <img src="/assets/edit.png" alt="Original icon" class="original-icon1">
    <img src="/assets/done_FILL0_wght400_GRAD0_opsz48.svg" alt="New icon" class="new-icon1"  id="${value.id}"  alt="" onclick="updateLabel(this)">
    <input type="text"  class="postedlabel" id="postlabel" value="${value.label}" readonly>
</div>

    </div>`)
      })
    },
    error: function (error) {
      console.error(error);
    },

  });
});

// const iconWrapper = document.getElementsByClassName('.icon-wrapper');
// const originalIcon = document.getElementsByClassName('.original-icon1');
// const newIcon = document.getElementsByClassName('.new-icon1');
// const editableInput = document.getElementsByClassName('.postedlabel');
// console.log(iconWrapper, "icon clikwed");
// originalIcon.addEventListener('click', function () { 
//   originalIcon.style.display = 'none';
//   newIcon.style.display = 'block';
//   editableInput.classList.add('editable');
//   editableInput.removeAttribute('readonly');
// });

// newIcon.addEventListener('click', function () {
//   newIcon.style.display = 'none';
//   originalIcon.style.display = 'block';
//   editableInput.classList.remove('editable');
//   editableInput.setAttribute('readonly', true);
// });

function deleteLabel(deleteId) {
  var id = $(deleteId).attr('id')
  $.ajax({
    type: "DELETE",
    url: `http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${id}/deleteNoteLabel`,
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
      window.location.reload();
    },
    error: function (error) {
      console.error(error);
    }
  });
}
function updateLabel(updateID) {
  var labelId = $(updateID).attr('id');
  var newLabel = $("#postlabel").val();
  var id = localStorage.getItem('userid')
  let updateLabelObj = {
    "label": newLabel,
    "isDeleted": false,
    "id": labelId,
    "userId": id
  }
  $.ajax({
    type: "POST",
    url: `http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${labelId}/updateNoteLabel`,
    data: JSON.stringify(updateLabelObj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
      window.location.reload();
    },
    error: function (error) {
      console.error(error);
    }
  });

}
function getarchivenotes() {
  window.location.href = "/templates/archivenotes.html"
}


function gettrashnote() {
  window.location.href = "/templates/trash.html"
}

function getnotelist() {
  window.location.href = "/templates/dashboard/dashboard.html"
}
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
    $(".createnote").css("height", "120px")
  })

  $('#closebutton').on('click', function () {
    $('#title').hide();
    $('.iconslist').hide();
    $('#description').show();
    $('#iconstitle').show();
    $(".createnote").css("height", "40px")
  })
});
function toggleNav() {
  var nav = document.getElementById("side");
  var container = document.getElementById("centerpart")
  var center = document.getElementById("uppergetid")
  if (nav.style.width === "250px") {
    nav.style.width = "0";
    container.style.width = "100vw"
    center.style.width = "100vw"
  } else {
    nav.style.width = "250px";
    container.style.width = "78vw"
    center.style.width = "100%"
  }
}
function logout() {
  localStorage.removeItem('token')
  window.location.href = "/templates/login/login.html"
}
$(function () {
  $('#listview').on('click', e => {
    $('.listnotes').toggleClass('foo');
  });
})

