$(function(){
$.ajax({
    type: "GET",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList",
    contentType: 'application/json',
    headers: { "Authorization": localStorage.getItem('token') },
    success: function (response) {
      console.log(response);
      var achivearray=response.data.data
      console.log(achivearray);
      achivearray.forEach(function (item) {
        $('.getnote').append(`<div class="listnotes" style="background-color:${item.color} ;">
          <div class= "titlediv">
              <div class="pushpindiv">
                  <p class="gettitle" >`+ item.title + `</p>
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
                            <a href="#" class="list1" ></a>
                            <a href="#" class="list2"></a>
                            <a href="#" class="list3" ></a>
                            <a href="#" class="list4" ></a>
                            <a href="#" class="list5" ></a>
                            <a href="#" class="list6" ></a>
                            <a href="#" class="list7" ></a>
                            <a href="#" class="list8" ></a>
                            <a href="#" class="list9"></a>

                          </div>
                        </div> 

                    <img src="/assets/image_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px" width="25px">
                        <div>
                      <img  src="../assets/unarchive_FILL0_wght400_GRAD0_opsz48.svg" id="${item.id}" onclick="unArchive(this)" alt=""  height="25px" width="25px">
                       </div>
                          <div class="dropdown">
                          <img class="morebutton"  src="/assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                          width="25px">
                          <div class="dropdown-content">
                            <a href="#" >Delete note</a>
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
})


function unArchive(noteid){
  var id=$(noteid).attr('id')
  console.log(id);
  let restoreobj={
    noteIdList: [id],
    isArchived: false,
  }
  $.ajax({
    type: "POST",
    url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
    data:JSON.stringify(restoreobj),
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


function gettrashnote(){
  window.location.href = "/templates/trash.html"
}
function getnotelist(){
  window.location.href = "/templates/dashboard/dashboard.html"
}
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