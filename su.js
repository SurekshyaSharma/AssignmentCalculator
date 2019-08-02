$(document).ready( function () {
   
    AssignCalculator();
   
});

function AssignCalculator(){
    
    let today = new Date();
    var TodayDate = today.toLocaleString('en-US',{ 
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric' }, {
         hour: '2-digit', 
         minute: '2-digit' });
 
    let currentMonth = today.getMonth() +1;
    let currentYear = today.getFullYear();
    let currentDay =  today.getDay();
   //  console.log(TodayDate);
   //  console.log(currentMonth);
   //  console.log(currentYear);

        startMonth = document.getElementById("userStartMonth").value;
        startDay = document.getElementById("userStartDay").value;
        startYear = document.getElementById("userStartYear").value;
        console.log('Day:', startDay,'Month:',startMonth, 'Year:',startYear);

        submitMonth = document.getElementById("userCloseMonth").value;
        submitDay = document.getElementById("userCloseDay").value;
        submitYear = document.getElementById("userCloseYear").value;
        console.log('Day:',submitDay,'Month:',submitMonth,'Year:',submitYear);

        assignmentType = document.getElementById("assignType").value;
     //     if ( startMonth||(startDay && startYear) = "")
     //     {
     //        alert("Enter the correct date.");
     //     }

        if (  assignmentType == "Annotated Bibliography")
        {
          $("#submitResult").empty();
            
                    $("#submitResult").append(
                         '<div>'+
                         '<p> Note: This is how you start</p>'+  '<br>'+
                        ' `<a href="https://writingcenter.unc.edu/tips-and-tools/understanding-assignments/" target="_blank">Read through the assignment</a>`'+
                     '</div>'
                        )
         
        }
        if (  assignmentType == "Business Report")
        {
          $("#submitResult").empty();

             $("#submitResult").append(
               '<div>'+
               '<p>'+ 'Note: A business report is an evaluation or assessment of a particular issue or set of circumstances'+
               'or financial operations that relate to the performance of a business'+'</p>'+  '<br>'+
           '`<a href="https://writingcenter.unc.edu/tips-and-tools/understanding-assignments/" target="_blank">How to write a Business Paper</a>`'+
           '</div>'
              )
         
        }

        if (  assignmentType == "Research Paper")
        {
          $("#submitResult").empty();

               $("#submitResult").append(
               '<div>'+
               '<p>'+' Note: The research and writing process is not always linear. Keep in mind you may need to go forward or backwards.'+'</p>'+  '<br>'+
               '`<a href="https://writingcenter.unc.edu/tips-and-tools/understanding-assignments/" target="_blank">Documents on how to start Research Paper</a>`'+
           '</div>'
              )

        }
       
        if (  assignmentType == "Reflection Paper")
        {
          $("#submitResult").empty();
            
             $("#submitResult").append(
               '<div>'+
               '<p>'+ 'Note: A reflection paper is your chance to add your thoughts and analysis to what you have read and experienced. A reflection paper is meant to illustrate your understanding of the material and how it affects your ideas and possible practice in future.</p>'+  '<br>'+
               '`<a href="https://www.wikihow.com/Write-a-Reflection-Paper" target="_blank">Take some google help</a>`'+
           '</div>'
              )

        }
      
    }         
   