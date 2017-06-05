function forminfo() {
  var input1 = document.getElementById('name1');
  var input2 = document.getElementById('number1');
  var input3 = document.getElementById('name2')
 var container = document.getElementById('container');
container.innerHTML = "<h1>"+"name: "+input1.value+"</br>"+" number: "+input2.value+"</br>"+" father's name:"+input3.value+"</h1>";

}
