var objUsers = [
  {
    username: "Arthur",
    password: "qwerty",
    type: "admin"
  },
  {
    username: "Lucas",
    password: "qwerty",
    type: "user"
  },
  {
    username: "Maria",
    password: "qwerty",
    type: "user"
  },
  {
    login: "john", 
    password:"qwerty", 
    type:"user"
  },
  {
    login: "dom", 
    password:"qwerty", 
    type:"user"
  },

]


function auth() {
    var login = document.forms["signin"]["login"].value;
    var password = document.forms["signin"]["password"].value;
    
    if (login == "" || password == "" ){
      alert("Preencha os campos");/*displays error message*/
    }

    else{

      for(i = 0; i < objUsers.length; i++){

        if ( login == objUsers[i].username && password == objUsers[i].password){
          console.log(login+ " is logged in!!!");
          /*opens the target page while Id & password matches*/
          window.location.href = "dashboard.html";
          return;
        }
      }
    }
  }