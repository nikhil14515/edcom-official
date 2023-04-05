
let ele=document.getElementById('ham')
let im=document.getElementById('clickable')

function visible(){
  if (ele.style.display=='none'){
    ele.style.display='inline'
    im.src='icons/close-icon.png'
  }
  else{
    ele.style.display='none'
      im.src='icons/menu-icon.png'
  }
}

var firebaseConfig = {
  apiKey: "AIzaSyC7cgDY-pf7sFAWnoFcZ2KjSxmASIvc7w4",
  authDomain: "ed-contests.firebaseapp.com",
  projectId: "ed-contests",
  storageBucket: "ed-contests.appspot.com",
  messagingSenderId: "261132206803",
  appId: "1:261132206803:web:c21988e69ae3543e410a26"
};
firebase.initializeApp(firebaseConfig);

function signIn() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value
  console.log(email,password)
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.write("You are signed In.")
    })
    .catch((error) => {        
        if(error.code=="auth/user-not-found"){
          alert("User not registered");
        }
        else if(error.code=="auth/wrond-password"){
          alert("User not registered");
        }
        else{
          alert("Error occured while login! Try again later or contact the admin.")
        }
    });
}

function pwdReset(){
  
  var email = document.getElementById('email').value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    console.log("Reset request sent")
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}