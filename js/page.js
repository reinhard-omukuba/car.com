window.onscroll = function(){
    if(document.body.scrollTop >50 || document.documentElement.scrollTop){
        document.getElementById("navbar2").style.display = "block";
        document.getElementById("navbar1").style.display = "none";

    }
    else{
    document.getElementById("navbar2").style.display = "none";
    document.getElementById("navbar1").style.display = "block";
    }
}



setTimeout(function() { myFunction("Hello world"); },1500);


function myFunction(value){
    document.getElementById("theTimeOut").innerHTML = value;

    
}


