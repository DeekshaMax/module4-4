
"use strict";
function string_to_array()
{
  var str=document.getElementById("stringtext").value;
  var res = str.split(" ");
  document.getElementById("arrayofwords").innerHTML=res;
}
