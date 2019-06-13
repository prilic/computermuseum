
//Menu
alert('hello');
function toggle(){
  var a = document.getElementsByClassName('menu');

  if(a[0].style.display==="none"){

    for(i=0;i<a.length;i++)
  	{
  		a[i].style.display="block";
  	}
  }
  else{
  	
  	for(i=0;i<a.length;i++)
  	{
  		a[i].style.display="none";
  	}
    /*a[0].style.display="none";
    a[1].style.display="none";
    a[2].style.display="none";
    a[3].style.display="none";*/
  }

}

/*
document.getElementsByClassName('menu')[0].style.display="none";
document.getElementsByClassName('menu')[1].style.display="none";
document.getElementsByClassName('menu')[2].style.display="none";
document.getElementsByClassName('menu')[3].style.display="none";
*/
