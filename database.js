var playersRef = firebase.database().ref();

const addStudentBtn = document.getElementById("addStudentBtn");
const getStudentBtn = document.getElementById("getStudentBtn");

var setGradYear;
var setStudentName;
var setStudentGrade;

//Updates Setters & playersRef with current info in text boxes when called
function getStudentInfo(Year, Name, Grade){
    Year = setGradYear = document.getElementById("setGradYear").value
    Name = setStudentName = document.getElementById("setStudentName").value;
    Grade = setStudentGrade = document.getElementById("setStudentGrade").value;

    playersRef = firebase.database().ref("GradYear/" + setGradYear + "/" + setStudentName);
}

//Pulls student info from getStudentInfo & sends it to database
addStudentBtn.onclick = () => {
    
    getStudentInfo();

    playersRef.set({

        StudentGradYear: setGradYear,
        StudentName: setStudentName,
        LetterGrade: setStudentGrade
        
    });
  
}

getStudentBtn.onclick = () =>{

    getStudentInfo();
 
    firebase.database().ref().once("value",(snapshot) => {
        
        console.log(snapshot.val());

    });

    playersRef.once("value",(snapshot2) => {

        document.getElementById("getGradYear").innerHTML = snapshot2.val().StudentGradYear;
        document.getElementById("getStudentName").innerHTML = snapshot2.val().StudentName;
        document.getElementById("getStudentGrade").innerHTML = snapshot2.val().LetterGrade;

        console.log(snapshot2.val());

    });

}   



