function logout()
{

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey : "AIzaSyDZ7NZnM3XlCKIFNqLo6FjEZkkde-FhUN8",
    authDomain: "medi-chat2-79882.firebaseapp.com",
    databaseURL: "https://medi-chat2-79882.firebaseio.com",
    projectId: "medi-chat2-79882",
    storageBucket: "medi-chat2-79882.appspot.com",
    messagingSenderId: "160461034358",
    appId: "1:160461034358:web:710a558cb79394a7c26057"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>