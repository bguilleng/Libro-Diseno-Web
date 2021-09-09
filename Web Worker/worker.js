// JavaScript Document
var i = 0; 
function countNumbers() 
{
 if(i < 100000)
 {
   i = i + 1; postMessage(i); 
 } // Espera un tiempo antes de volver a ejecutar este script
 setTimeout("countNumbers()", 500);
} 
countNumbers();
