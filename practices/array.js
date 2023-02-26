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