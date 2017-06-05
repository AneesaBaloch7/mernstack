//window.alert('JS');
//loops
//for(var i=0;i<10;i++)
//{
  //document.write(i);
//}
//array print
//var arr =[1,2,3,5];

//for(var i=0; i<arr.length;i++){
  //document.write(arr[i]);
//}
//for(var i in arr)
//{
    //document.write(arr[i]);
//}
//function showNumber() {
  //document.write(10);
//return 10;
//}
//function anotherNumber() {
  //return showNumber();
  //document.write(showNumber());
//}
//anotherNumber();
//var btnSubmit = document.getElementById('btnSubmit');
//btnSubmit.addEventListener('click',function(){

//})
//anonimous function
//var hello =function(){
  //return "Hello!";

//}
//document.write(hello());
function printValue() {
  var input = document.getElementById('input');
  //console.log("input.value");
//document.write('input.value');
var container = document.getElementById('container');
container.innerHTML = "<h1>"+input.value+"</h1>";
}
