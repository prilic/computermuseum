
//Menu
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
  }

}

//Galerie

    var mainPic =document.getElementsByClassName('mainPic');
    var count= mainPic.length;
    for(i=0;i<count;i++){
        mainPic[i].addEventListener('click',function pictureHidden(){
            var picHidden = document.getElementsByClassName('pictureHidden');
            var count2 = picHidden.length;
            for(j=0;j<count2;j++){
                if(picHidden[i].style.display=='block'){
                picHidden[i].style.display='none';
                }
                else{
                picHidden[i].style.display='block';
                }   
            }

        });
    };

//Controle de formulaire

var prenom = document.getElementById("iptprenom");
var nom = document.getElementById("iptnom");
var mail = document.getElementById("iptmail");
var message = document.getElementById("iptmessage");
var regEmail = /^[a-z0-9-_.]+@[a-z0-9-.]+.[a-z]{2,14}$/i;


prenom.addEventListener('blur',controlePrenom);
nom.addEventListener('blur',controleNom);
mail.addEventListener('blur',controleMail);
message.addEventListener('blur',controleMessage);

function controlePrenom(){

    if(prenom.value.length < 3 || prenom.value == "" || (!/[^a-zA-Z]/.test(prenom))){
        prenom.style.backgroundColor="red";
    }
    else{
        prenom.style.backgroundColor="green";
    }
}
function controleNom (){
    if(nom.value.length < 3 || nom.value == "" || (!/[^a-zA-Z]/.test(nom))){
        nom.style.backgroundColor="red";
    }
    else{
        nom.style.backgroundColor="green";
    }
}
function controleMail (){
    if(mail.value.length < 10 || mail.value == "" || (!regEmail.test(mail.value.trim()))){
        mail.style.backgroundColor="red";
    }
    else{
        mail.style.backgroundColor="green";
    }
}
function controleMessage (){
    if(message.value.length < 30 || message.value == ""){
        message.style.backgroundColor="red";
    }
    else{
        message.style.backgroundColor="green";
    }
}
