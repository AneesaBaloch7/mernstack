var msgg =document.getElementById('msg');

function disp() {
  var input1 = document.getElementById('msg');

 var container = document.getElementById('container');
container.innerHTML = input1.value+" :";

}
//function save(){
  //localStorage.setItem("lastname",msg.innerHTML);
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//}
function save()
{
  localStorage.mymessage =(msgg);

}
function load(){
  msgg = (localStorage.mymessage);
}
var testObject = { 'one': 1, 'two': 2, 'three': 3 };
console.log('typeof testObject: ' + typeof testObject);
console.log('testObject properties:');
for (var prop in testObject) {
    console.log('  ' + prop + ': ' + testObject[prop]);
}

// Put the object into storage
localStorage.setItem('testObject', testObject);

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);
