let userInput; 
let movies=[];

$(".add").click(function() {
  userInput=$(".picture-url").val();
    movies.push(userInput);
    $(".gallery").append("<img src="+userInput+">");
    $(".movies").val(''); 
   
});
    