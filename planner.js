var firebaseConfig = {
    apiKey: "AIzaSyCUipxarnEiH-m1zJEk9ZoidB_G2ZijBSI",
    authDomain: "planner-ebf0c.firebaseapp.com",
    databaseURL: "https://planner-ebf0c-default-rtdb.firebaseio.com",
    projectId: "planner-ebf0c",
    storageBucket: "planner-ebf0c.appspot.com",
    messagingSenderId: "428309514918",
    appId: "1:428309514918:web:caefc544c09f5153204267",
    measurementId: "G-WZP1KEXH62"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  account_name = localStorage.getItem("Account Name");

  function addFitnessPlanner() {
    fitplanner_name = document.getElementById("roomName2").value;
    firebase.database().ref(account_name).child("fitnessplanners").push({
      name: fitplanner_name
    });
    window.location = "fitplan.html";
  }

  function addDailyPlanner() {
    dayplanner_name = document.getElementById("roomName").value;
    firebase.database().ref(account_name).child("dailyplanners").push({
      name: dayplanner_name
    });
    window.location = "dayplan.html";
  }


  function getData() {
    firebase.database().ref(account_name).on('value', function(snapshot) {document.getElementById("Dayoutput").innerHTML = "";document.getElementById("Fitoutput").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;childData = childSnapshot.val();
     Room_names = childKey;
     actual_name = childData;
    //Start code
    console.log("Planner Name - "+actual_name);

    if (Room_names == "dailyplanners") {
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToPlannerName(this.id)'>"+ actual_name+"</div><hr>";
        document.getElementById("Dayoutput").innerHTML += row;
    }

    if (Room_names == "fitnessplanners") {
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToPlannerName(this.id)'>"+actual_name+"</div><hr>";
        document.getElementById("Fitoutput").innerHTML += row;
    }
    //End code
    });});}
getData();


 function redirectToPlannerName(name){
    console.log(name);
    localStorage.setItem("planner_name", name);
    window.location = "dayplan.html";
} 


function logout() {
    window.location = "index.html";
    localStorage.removeItem("Account Name");
    document.getElementById("Fitoutput").innerHTML = "";
    document.getElementById("Dayoutput").innerHTML = "";
  }