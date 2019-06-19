
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

function pictureHidden1()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[0].style.display=="block")
    {
    picHidden[0].style.display="none";
    }
    else
    {
    picHidden[0].style.display="block";
    }
}
function pictureHidden2()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[1].style.display=="block")
    {
    picHidden[1].style.display="none";
    }
    else
    {
    picHidden[1].style.display="block";
    }
}
function pictureHidden3()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[2].style.display=="block")
    {
    picHidden[2].style.display="none";
    }
    else
    {
    picHidden[2].style.display="block";
    }
}
function pictureHidden4()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[3].style.display=="block")
    {
    picHidden[3].style.display="none";
    }
    else
    {
    picHidden[3].style.display="block";
    }
}
function pictureHidden5()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[4].style.display=="block")
    {
    picHidden[4].style.display="none";
    }
    else
    {
    picHidden[4].style.display="block";
    }
}
function pictureHidden6()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[5].style.display=="block")
    {
    picHidden[5].style.display="none";
    }
    else
    {
    picHidden[5].style.display="block";
    }
}
function pictureHidden7()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[6].style.display=="block")
    {
    picHidden[6].style.display="none";
    }
    else
    {
    picHidden[6].style.display="block";
    }
}
function pictureHidden8()
{
    var picHidden=document.getElementsByClassName("pictureHidden")
    if(picHidden[7].style.display=="block")
    {
    picHidden[7].style.display="none";
    }
    else
    {
    picHidden[7].style.display="block";
    }
}
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
