
var objProjects, x, i, name, client, type, totalHours, usersAttached;


//Users Array
var objUser = [

  {login: "arthur", password:"qwerty", type:"admin"},
  {login: "lucas", password:"qwerty", type:"user"},
  {login: "john", password:"qwerty", type:"user"},
  {login: "dom", password:"qwerty", type:"user"},
]
//Project Array
var objProjects = [

  {name: "Hero-1", client:"Doe", type:"sim", totalHours:"12", usersAttached:"lucas"},
  {name: "Hero-2", client:"Moe", type:"nao", totalHours:"10", usersAttached:"john"},
  {name: "Hero-3", client:"Mary", type:"nao", totalHours:"9", usersAttached:"dom"},

]

for (x in objProjects) {
  document.getElementById("demoArray").innerHTML += x + "<br>";
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

