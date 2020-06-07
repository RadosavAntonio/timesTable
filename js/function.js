function codeAddress() {
  var p="";
  for(var i=1; i<13; i++){
    p +='<div class="grid-container">';
    p +='<div class="orange">';
    p +='<h3 class="tableHead">';
    p += i;
    p += ' times table';
    p += '</h3>';
      for(var j=1; j<13; j++){
        var q = i * j;
        p += i + " + " + j + " = " + q + '<br/>';
      }
    p+='</div>';
    p+='</div>';
  }
  document.getElementById("container").innerHTML = p;   
}
window.onload = codeAddress;