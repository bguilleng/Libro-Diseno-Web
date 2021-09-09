// JavaScript Document
var i = " "; 
function getTime() 
{
	var today=new Date();  
	var h=today.getHours();  
	var m=today.getMinutes();  
	var s=today.getSeconds();   
	m=checkTime(m);  
	s=checkTime(s);
	i = h+":"+m+":"+s;
	postMessage(i); 
}  


