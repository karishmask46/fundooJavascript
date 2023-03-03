$(function(){
    $.ajax({
        type: "GET",
        url: "http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList",
        contentType: 'application/json',
        headers: { "Authorization": localStorage.getItem('token') },
        success: function (response) {
          console.log(response);
          var achivearray=response.data.data
          console.log(achivearray);
          achivearray.forEach(function (item) {
            $('.getnote').append(`<div class="listnotes">
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
                  <img src="../assets/delete_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                    width="25px">
                    <img src="../assets/delete_forever_FILL0_wght400_GRAD0_opsz48.svg" alt="" height="25px"
                      width="25px">
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