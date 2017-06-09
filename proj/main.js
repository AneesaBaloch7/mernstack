function dr_call() {
  checkUser();
  dr_record();

}
function patient_call(){
  checkPatient();
}
function staff_call() {
  checkStaff();
}

function checkPatient(){
  var patient =[
    {username:"Samina",password:1234},
    {username:"irum",password:1234},
    {username:"anaya",password:1234},
]
  var input = document.getElementById("input").value;
  var pass = document.getElementById("pass").value;
  var bUser = false;

  for(var i in patient){
    if(patient[i].username == input && patient[i].password == pass ){
      document.write("You've logged in");
      bUser = true;
    }
  }
  if(bUser == false){
    document.write("User doesn't exist");
  }
}
function checkUser(){
  var user = [
    {username:"Sumair",password:1234},
    {username:"Ammar",password:1234},
    {username:"Ali",password:1234},
    {username:"Sana",password:1234},
    {username:"Komal",password:1234},

  ]
  var input = document.getElementById("input").value;
    var pass = document.getElementById("pass").value;
  var bUser = false;

  for(var i in user){
    if(user[i].username == input && user[i].password == pass){
      document.write("You've logged in");
      bUser = true;
    }
  }
  if(bUser == false){
    document.write("User doesn't exist");
  }
}
function checkStaff(){
  var staff = [
    {username:"Awais",password:1234},
    {username:"Sameer",password:1234},
  ]
  var input = document.getElementById("input").value;
    var pass = document.getElementById("pass").value;
  var bUser = false;

  for(var i in staff){
    if(staff[i].username == input && staff[i].password == pass){
      document.write("You've logged in");
      bUser = true;
    }
  }
  if(bUser == false){
    document.write("User doesn't exist");
  }
}
function dr_record(){
  var dr  = [
    {Bio:"Physician",Last_CheckedPatient:"Ammar",Diagnosis:"fever"},
  
}
