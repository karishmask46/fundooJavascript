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
$(function () {
  $.ajax({
    type: "GET",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
    dataType: 'json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (result) {
      console.log(result);
      arrayData = result.data.data
      arrayData=arrayData.filter((k)=>{
        return k.isArchived==false  && k.isDeleted == false;
      })
      console.log(arrayData);
      arrayData.forEach(function (item) {
        $('.getnote').append(`<div class="listnotes">
          <div class= "titlediv" id="${item.title}" title="${item.description}" onclick="openPopUp(this)" >
              <div class="pushpindiv">
                  <p class="gettitle" >`+ item.title + `</p>
                  <dialog id="myDialog">This is an open dialog window</dialog>

                  <img id="pushpin" src="/assets/push_pin_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                      width="25px">
              </div>
              <div id="desc">
                  <p class="getdescription">`+ item.description + `</p>
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
                            <a href="#" class="list1" id="${item.id}" onclick="colorapi(this)" ></a>
                            <a href="#" class="list2" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list3" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list4" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list5" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list6" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list7" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list8" id="${item.id}" onclick="colorapi(this)"></a>
                            <a href="#" class="list9" id="${item.id}" onclick="colorapi(this)"></a>

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
      
    },
    error: function (error) {
      console.error(error);
    }
  });
});
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
    },
    error: function (error) {
      console.error(error);
    }
  });

}






function openPopUp(element) {
  $("#methods").dialog({
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
      $(".ui-dialog-content").append(`<div class="update"><input type="text" class="updatetitle" id="text">
                  <input type="text" class="updatedesc" id="desctext">
                  <div class="iconslist">
                            <div class="listicons">
                                <img src="/assets/add_alert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                <img src="/assets/person_add_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">

                                <img src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">

                                <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">

                                <img src="/assets/archive_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                <img src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                            </div>
                            <div>
                                <button class="closebutton" type="submit" onclick="updatenote(this)" >Close</button>
                            </div>
                        </div>
                  </div>`)

    }

  });
  document.getElementById("text").value = element.id
  document.getElementById("desctext").value = element.title
}

function updatenote(element) {
  console.log(element.id, element.title);
  var title = element.id;
  var desc = element.title;
  var id = $(element).attr('id')
  let updateObj = {
    noteId: [id],
    title: title,
    description: desc,
  }
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
    data: JSON.stringify(updateObj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error(error);
    }
  });
}



function colorapi(noteitem) {
  console.log(noteitem.style);
  let colour = [noteitem.style.backgroundColor, 'yellow']
  let noteid = $(noteitem).attr('id')
  let colorObj = {
    noteIdList: [noteid],
    color: colour
  }
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
    data: JSON.stringify(colorObj),
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error(error);
    }
  });
}

function getarchivenotes() {
  window.location.href = "/templates/archivenotes.html"
}


function gettrashnote(){
  window.location.href = "/templates/trash.html"
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