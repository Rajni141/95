/ADD YOUR FIREBASE LINKS HERE

function getData(){firebase.database().ref("/").on('value' , function(snapshot){document.getElementById("output").innerHTML
Room_names = childKey;


      //Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+"<img class='user_tick src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;



  
      //End code
      });});}
getData() 
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYN7fN8Fcb68lN_qXgIw_0p760Zbs8u1Q",
  authDomain: "tic-tac-toe-bc368.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-bc368.firebaseio.com",
  projectId: "tic-tac-toe-bc368",
  storageBucket: "tic-tac-toe-bc368.appspot.com",
  messagingSenderId: "546767916114",
  appId: "1:546767916114:web:8de163f89adc1455e4e38b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"


});});}
getData();



function addRoom()
{

  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"

  });

localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";

}

function redirectToRoomName()
{


  console.log(name).localStorage
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html"

}
function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes  - document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
like : updated_likes

});
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}