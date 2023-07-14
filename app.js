function change()
{
    var img=document.getElementById("bulb");

    if(img.src.match("on"))
    {
        img.src="./assests/bulboff.jpg" ;
    }
    else{
        img.src="./assests/bulbon.jpg" ;
    }
}