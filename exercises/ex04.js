// Button program

let counter=0;
$("#freaky_button").click(function(){
    // what happens when the button is clicked?
    counter = counter + 1;
    $("#freaky_button").html("I've been touched " + counter + " time(s)");
})
