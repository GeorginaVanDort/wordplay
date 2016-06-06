$(document).ready(function() {
  $("#btn").click(function(event) {
    debugger;
    var sentence = $("input#sentence").val();
    var arr = sentence.split();
    alert(arr);

    var newArray = [];

    newArray = arr.map(function(word) {
      if (word.length >= 3) {
        return newArray.push(word);
      } else {
        return false;
      }
    });

    alert(newArray);






    // var groceries2 = groceries.map(function(item) {
    //   return $("#" + item).val();


    event.preventDefault();
  });

});

    // $("#items").hide();
    //
    //
    // groceries2 = groceries2.sort();
    //
    // groceries3 = groceries2.map(function(item2) {
    //   return item2.toUpperCase();
    // });
    //
    // var counter = 0;
    // groceries3.forEach(function(item2) {
    //   $("#result").append("<li>" + groceries3[counter] + "</li>");
    // counter++;
    // });
    //
    // $("#result").show();
