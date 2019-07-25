$(document).ready( function () {
    AssignCalculator();
  
});
function AssignCalculator(){
    console.log("let's get started");

    //  startMonth = document.getElementById("userStartMonth").value;
    //  startDay = document.getElementById("userStartDay").value;
    //  startYear = document.getElementById("userStartYear").value;
    //  console.log( startMonth,startDay,startYear);

    //  closeMonth = document.getElementById("userCloseMonth").value;
    //  closeDay = document.getElementById("userCloseDay").value;
    //  closeYear = document.getElementById("userCloseYear").value;
    //  console.log( startMonth,startDay,startYear);

    // assignmentType = document.getElementById("assignType").value;
    

    $(document).on('change', '#userStartMonth', function () {
        console.log($(this).val());
    
    });
    $(document).on('change', '#userStartDay', function () {
        console.log($(this).val());
    
    });
     
    $(document).on('change', '#userStartYear', function () {
        console.log($(this).val());
    
    });
    $(document).on('change', '#userCloseMonth', function () {
       
        console.log($(this).val());
    });
    $(document).on('change', '#userCloseDay', function () {
        console.log($(this).val());
    
    });
     
    $(document).on('change', '#userCloseYear', function () {
        console.log($(this).val());
    });
    $(document).on('change', '#assignType', function () {
        console.log($(this).val());
    
    });
     
     
    }