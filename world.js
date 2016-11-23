/* global $ */

// JavaScript File
$(document).ready(function(){
    
    $("#lookup").on('click',function(){
        
        var x =$("#country").val(); 
        
       if($("#verified").is(":checked")){
           lookupAll();
       }else{
           lookup(x);
       }
    });

function lookupAll(){
    var linksys= 'world.php?all=true';
    
    $.ajax(linksys,{
        method: 'GET',
    }).done(function(resol){
        $("#result").html(resol);
    }).fail(function(fail){
        $("#result").html('<b> Oops! error!</b>');
     });
}
    
    function lookup(query){
        var linksys='world.php?country='+query;
         $.ajax(linksys,{
             method: 'GET',
    }).done(function(resol){
        $("#result").html(resol);
        
    }).fail(function(fail){
        $("#result").html('ERROR!!');
    });
    }
});