 $(function(){
    let tablearray = [{
        name: "karishma",
        phone: "676483748",
        gender: "female"
    },{
        name:"reshma",
        phone:"64875876",
        gender:"female"
    },
    {
        name:"pavan",
        phone:"2563524",
        gender:"male"
    },
    {
        name:"harsh",
        phone:"2563524475",
        gender:"male"
    
    },
    {
        name:"harshita",
        phone:"74657",
        gender:"female"  
    },
    {
        name:"harshvardan",
        phone:"74657",
        gender:"male"  
    },
]
   tablearray.forEach(function(item){
    $('table').append('<tr><td>'+item.name+'</td><td>'+item.phone+'</td><td>'+item.gender+'</td><tr>')
   })
 })
 $(function(){
    $("#btn").on("click",function(){
        $("img").animate({
            opacity:'1',
            left:'100px',
            height:'500px',
            width:'500px'
        },2000,function(){
            $("img").animate({
                opacity:'1',
                left:'0px',
                height:'250px',
                width:'250px'},2000)  
        })
    })
 })
 
