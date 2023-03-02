let arrayobj=[{
    firstname:"karishma",
    lastname:"shaik",
    mobileNo:"7328636873",
},
{
    firstname:"reshma",
    lastname:"shaik",
    mobileNo:"7328636373", 
},
{
    firstname:"gousiya",
    lastname:"shaik",
    mobileNo:"7328653673",
},
{
    firstname:"mustafa",
    lastname:"shaik",
    mobileNo:"73286338433",
},{
    firstname:"taslima",
    lastname:"shaik",
    mobileNo:"73286338433",
}
]
$(function() {
    var arrayelement="";
    arrayobj.forEach(element => {
    arrayelement+=`<div id="topdiv"><div class="maindiv1" id="maindiv">`+element.firstname+`</div> 
<div class="inner" id="innerdiv">`+element.lastname+`</div>
<div class="indiv" id="indiv">`+element.mobileNo+`</div></div>`; 
    })
    $("#mainbox").append(arrayelement)
})
;
var listOfNotes = $('.getnote');
var innerText = $('.listnotes');
$.each(arrayData, function (index, item) {
  var titleText = $('.titlediv')
  titleText.append($('.pushpindiv').append($('#gettitle').text(item.title), $('#pushpin').attr('src', '../assets/push_pin_FILL0_wght400_GRAD0_opsz48.svg')
  ));
  titleText.append($('#desc').append($('#getdescription').text(item.description)))
  var imageList = $('.iconslist1');
  imageList.append($('.listicons1').append($('<img>').attr('src', '../assets/add_alert_FILL0_wght400_GRAD0_opsz48.svg')))
  imageList.append($('.listicons1').append($('<img>').attr('src', '../assets/person_add_FILL0_wght400_GRAD0_opsz48.svg')))
  imageList.append($('.listicons1').append($('<img>').attr('src', '../assets/palette_FILL0_wght400_GRAD0_opsz48.svg')))
  imageList.append($('.listicons1').append($('<img>').attr('src', '../assets/image_FILL0_wght400_GRAD0_opsz48.svg')))
  imageList.append($('.listicons1').append($('<img>').attr('src', '../assets/archive_FILL0_wght400_GRAD0_opsz48.svg').attr('archive-id',item).on('click',function(){
    setArchive(item)
  })))
  imageList.append($('<img>').attr('src', '../assets/more_vert_FILL0_wght400_GRAD0_opsz48.svg'))
  titleText.append(innerText);
  imageList.append(innerText);
  listOfNotes.append(innerText)
})