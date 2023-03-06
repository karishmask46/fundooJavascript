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


var arrayData = [];
$(function () {
  colorarray=["Red","White","yellow","Green"]
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
        $('.getnote').append(`<div class="listnotes" style="background-color:${item.color} ;">
          <div class= "titlediv" id="${item.title}" title="${item.description}" value="${item.id}" onclick="openPopUp(this)" >
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
  console.log(element);
  var id=$(element).attr('value')
  console.log(id);
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

                                    <div class="dropdown1" >
                                    <img id="colorpallete" src="/assets/palette_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                                    width="25px">
                                    <div class="dropdown-content1">
                                      <a href="#" class="list1" style="background-color:#fff475 ;" id="${id}" title="${'#fff475'}" onclick="colorapi(this)" ></a>
                                      <a href="#" class="list2" style="background-color:#ccff90 ;" id="${id}" title="${'#ccff90'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list3" style="background-color:#a7ffeb ;" id="${id}" title="${'#a7ffeb'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list4" style="background-color:#cbf0f8 ;" id="${id}" title="${'#cbf0f8'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list5" style="background-color:#aecbfa ;" id="${id}" title="${'#aecbfa'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list6" style="background-color:#d7aefb ;" id="${id}" title="${'#d7aefb'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list7" style="background-color:e8eaed ;" id="${id}" title="${'e8eaed'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list8" style="background-color:#fdcfe8;" id="${id}" title="${'#fdcfe8'}" onclick="colorapi(this)"></a>
                                      <a href="#" class="list9" style="background-color:#e6c9a8 ;" id="${id}" title="${'#e6c9a8'}" onclick="colorapi(this)"></a>
                                    </div>
                                  </div> 
          

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
    },
    error: function (error) {
      console.error(error);
    }
  });
  document.getElementById("titleId").value=title
  document.getElementById("descId").value=desc
}

function colorapi(noteitem) {
  console.log(noteitem.id,noteitem.title);
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
      // $(".listnotes").css("background-color",`${noteitem.title}`)
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

function getnotelist(){
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
    $(".createnote").css("height","120px")
  })
 
  $('#closebutton').on('click', function () {
    $('#title').hide();
    $('.iconslist').hide();
    $('#description').show();
    $('#iconstitle').show();
    $(".createnote").css("height","40px")
  })
});
function toggleNav() {
  var nav = document.getElementById("side");
  var container=document.getElementById("centerpart")
  var center=document.getElementById("uppergetid")
  if (nav.style.width === "250px") {
    nav.style.width = "0";
    container.style.width="100vw"
    center.style.width="100vw"
  } else {
    nav.style.width = "250px";
    container.style.width="78vw"
    center.style.width="100%"
  }
}