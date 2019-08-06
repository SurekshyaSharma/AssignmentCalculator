$(document).ready( function () {
   
    AssignCalculator();
    dateDiffInDays()
   
});

function AssignCalculator(){

      //   startMonth = document.getElementById("userStartMonth").value;
      //   startDay = document.getElementById("userStartDay").value;
      //   startYear = document.getElementById("userStartYear").value;
      //   console.log( startMonth, startYear);

      //   submitMonth = document.getElementById("userCloseMonth").value;
      //   submitDay = document.getElementById("userCloseDay").value;
      //   submitYear = document.getElementById("userCloseYear").value;
      //   console.log('Day:',submitDay,'Month:', submitMonth,'Year:',submitYear);

        /*************INput type**************************************************************** */
      
        assignmentType = document.getElementById("assignType").value;
    
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
   
    function dateDiffInDays()
    {
          start = document.getElementById("startDate").value;
          var startDate = start.split("-");
          console.log(startDate[0], startDate[1],startDate[2]); 
          submit = document.getElementById("dueDate").value;
          var submitDate = submit.split("-");
          console.log(submitDate[0], submitDate[1],submitDate[2]); 
    
         //   var calculation = submitDate[2] -startDate[2];
         //   console.log(calculation);
          
          var date_diff_indays = function(start, submit) {
         dt1 = new Date(start);
         dt2 = new Date(submit);
         return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
         }
         console.log(date_diff_indays(start, submit));
      /**********************************************************Checking if o difference dont show any dates***************************************************************************************************************** */
        
   
            // ($("#daysLeft").empty());
      
            // $("#daysLeft").append(
            //    '<p>'+'Days Left for submission:'+ '</p>')
      
               if (date_diff_indays(start, submit)!= 0){
      
            ($("#daysLeft").empty());
      
               $("#daysLeft").append(
            '<p>'+'Days Left for submission:'+' '+ date_diff_indays(start, submit)+' '+'days'+ '</p>')
            }   
      /*************************************************************************************************************************************************************************** */
            if(date_diff_indays(start, submit)<0) {
	
               $("#daysLeft").append(
                  "<b>Negative Number of Days:</b> Probably you entered the dates wrong...\n")
            
            }else if(date_diff_indays(start, submit)<0)  {
            
               $("#daysLeft").append("Hurry up !!!<br You have less than a week. />\n")
            
            
            }else if(date_diff_indays(start, submit)>7) {
            
            	$("#daysLeft").append("Looks like you have enough time.<br>Let's plan accordingly.\n")
            
            }
            
            if(date_diff_indays(start, submit)>99) {
               $("#daysLeft").append( "It's never too early to start!<br />\n")
            }
            
           AssignCalculator();
    }
