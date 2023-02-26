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
 
