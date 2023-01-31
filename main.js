var menuopen=document.getElementById('menuopen');
var menuclose=document.getElementById('menuclose');
var buttons=document.getElementsByTagName('button');
var menu=document.getElementsByClassName('menu')[0];
var bar=document.getElementsByClassName('bar')[0];
var barshadow=document.getElementsByClassName('barshadow')[0];
var html=document.getElementsByTagName('html')[0];



buttons=Array.from(buttons);
buttons.splice(buttons.length-1,1);
menuclose.style.display="none";




var screenWidth=screen.width;
console.log(screenWidth)

window.onresize=function()
{
if(screenWidth!=screen.width)
	location.reload()
}



menuopen.addEventListener('click', function()

{

menuopen.style.display="none";
menuclose.style.display="block";
menu.style.right="30%";
menu.style.top="30vh";
bar.style.width="60%";
bar.style.height="100vh";
bar.style.top="0";
barshadow.style.width="200%";
barshadow.style.height="100vh";
barshadow.style.top="0";
barshadow.style.transition=".25s";

});


menuclose.addEventListener('click', function()

{

menuopen.style.display="block";
menuclose.style.display="none";
menu.style.right="-200%";
menu.style.top="-100%";
bar.style.width="0%";
bar.style.height="100vh";
bar.style.top="0";
barshadow.style.width="0%";
barshadow.style.height="100vh";
barshadow.style.top="-100";
barshadow.style.transition=".35s";

});



barshadow.addEventListener('click', function()

{

menuopen.style.display="block";
menuclose.style.display="none";
menu.style.right="-200%";
menu.style.top="-100%";
bar.style.width="0%";
bar.style.height="100vh";
bar.style.top="0";
barshadow.style.width="0%";
barshadow.style.height="100vh";
barshadow.style.top="-100";
barshadow.style.transition=".35s";

});
