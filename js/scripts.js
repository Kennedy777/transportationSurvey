$(document).ready(function() {
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    $("#luckyOutput").show();
    $("input:checkbox[name=luckyEvents]:checked").each(function(){
      var luckyOutput = $(this).val();
      $("#lucky-responses").append(luckyOutput + "<br>");
      $("unlucky-responses").show();
      $("input:checkbox[name=unluckyEvents]:checked").each(function){
        var unluckyOutput =($this).val();
        $("unluckyOutput").append(unluckyOutput + "<br>");
      });
  });
