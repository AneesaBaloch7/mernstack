window.onload=display;
 var DATA=[];var todolist=" ";var jobs=" ";
  function addjobs(){
var input=document.getElementById('input');
DATA.push(input.value);
 input.value=" ";
 for(var i in DATA){
jobs=jobs+"<div  class="+"items"+">"+"<input type='checkbox' >"+DATA[i]+"</div>"+"<br>";
  }
  display();
  }
   function display(){
var container=document.getElementById('container');
 	container.innerHTML=jobs+todolist;
if(container.innerHTML== null){
 		localStorage.setItem("listitem",null);
 		}
 	else{
 	localStorage.setItem("listitem",container.innerHTML);
 	}
	}
	function save(){
 var container=document.getElementById('container');
 if(localStorage.getItem("listitem") == null){
 	todolist='';
 	}
 else{
 	todolist=localStorage.getItem("listitem");
 	}}
save();
