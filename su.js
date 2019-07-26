$(document).ready( function () {
    AssignCalculator();
  
});
function AssignCalculator(){

        startMonth = document.getElementById("userStartMonth").value;
        startDay = document.getElementById("userStartDay").value;
        startYear = document.getElementById("userStartYear").value;
        console.log( startMonth, startDay,startYear);

        closeMonth = document.getElementById("userCloseMonth").value;
        closeDay = document.getElementById("userCloseDay").value;
        closeYear = document.getElementById("userCloseYear").value;
        console.log( closeMonth,closeDay,closeYear);

        assignmentType = document.getElementById("assignType").value;
        console.log( assignmentType);

        // if ( startMonth||(startDay && startYear) == "None")
        // {
        //     alert("Enter the correct date.");
        // }

        // if ( assignmentType == AnnotatedBibliography)
        // {

        // }
    }